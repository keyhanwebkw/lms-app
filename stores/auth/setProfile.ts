import type { SetProfileState } from "~/types/auth";
import type { ResultApiType } from "~/types/global";

import { messages } from "~/static/messages";
import { dataAvatarsSID } from "~/static/dataAavatarsSID";
import { convertToTimestamp } from "~/func/GenerateDate";
import { POST_SET_PROFILE } from "~/services/api/user";
import { ToastMsg } from "~/stores/global/toast";
import { setIndexedDB } from "~/services/db/indexedb";

export const SetProfile = defineStore('SetProfile', {
    state: () => <SetProfileState>({
        dataModel: {
            name: '',
            family: '',
            nationalCode: '',
            birthDate: '',
            gender: 'female',
            avatarSID: ''
        },
        dataError: {
            name: '',
            family: '',
            nationalCode: '',
            birthDate: '',
            gender: ''
        },
        loading: false
    }),
    actions: {
        clearDataModel() {
            this.dataModel = {
                name: '',
                family: '',
                nationalCode: '',
                birthDate: '',
                gender: 'female',
                avatarSID: ''
            }
        },

        async validateForm() {
            this.dataError = useClearErrors(this.dataError)
            const rules: Record<string, { condition: boolean, message: string }[]> = {
                name: [
                    { condition: !this.dataModel.name, message: messages.nameRequired },
                    { condition: this.dataModel.name?.length < 3, message: messages.nameNotValid }
                ],
                family: [
                    { condition: !this.dataModel.family, message: messages.familyRequired },
                    {
                        condition: this.dataModel.family?.length < 3, message: messages.familyNotValid
                    }
                ],
                gender: [
                    { condition: !this.dataModel.gender, message: messages.genderRequired }
                ],
                nationalCode: [
                    {
                        condition: this.dataModel.nationalCode.length > 0 && this.dataModel.nationalCode?.length !== 10,
                        message: messages.nationalCodeNotValid
                    }
                ]
            };

            let hasError = false;

            Object.keys(rules).forEach(field => {
                const rule = rules[field].find(({ condition }: { condition: boolean }) => condition);
                if (rule) {
                    this.dataError[field as keyof typeof this.dataError] = rule.message;
                    hasError = true;
                }
            });

            if (!hasError) {
                this.submitSetProfile();
            }
        },

        async submitSetProfile() {
            const toastMessage = ToastMsg()

            this.loading = true

            this.dataModel.avatarSID = this.dataModel.gender == 'male' ? dataAvatarsSID[5] : dataAvatarsSID[4]

            const formData: FormData = await usePrepareFormData(this.dataModel)

            const { data, error, status }: ResultApiType = await POST_SET_PROFILE(formData)
            this.loading = false
            if (status == 'success') {
                toastMessage.ToastSuccessMsg({ message: messages.setProfileSuccessfully })
                setIndexedDB('profile', JSON.stringify(data.profile))
                navigateTo('/')
            } else {
                if (error == null) {
                    toastMessage.ToastErrMsg({ message: data.message })
                    return;
                }
                this.dataError = useUpdateErrors({ dataError: this.dataError, errorList: error })
            }
        }
    }
})