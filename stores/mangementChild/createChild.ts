import type { ChildCreateState } from "~/types/child";
import type { ResultApiType } from "~/types/global";

import { POST_CREATE_CHILD } from "~/services/api/managementChild";
import { usernameRegex } from "~/services/constants";
import { dataAvatarsSID } from "~/static/dataAavatarsSID";
import { messages } from "~/static/messages";
import { ToastMsg } from "../global/toast";

export const CreateChild = defineStore('CreateChild', {
    state: () => <ChildCreateState>({
        dataModel: {},
        dataError: {
            name: '',
            username: '',
            birthDate: '',
            nationalCode: '',
            avatarSID: '',
            gender: ''
        },
        avatar: {
            popup: false
        },
        loading: false,
    }),
    actions: {
        clearDataModel() {
            this.dataModel = {
                name: '',
                username: '',
                nationalCode: '',
                gender: '',
                birthDate: '',
                avatarSID: dataAvatarsSID[0],
            }
        },

        changeAvatar(SID: string) {
            this.dataModel.avatarSID = SID
            this.avatar.popup = false
        },

        async validateForm() {
            this.dataError = useClearErrors(this.dataError)
            const rules: Record<string, { condition: boolean, message: string }[]> = {
                name: [
                    { condition: !this.dataModel.name, message: messages.nameRequired },
                    { condition: this.dataModel.name?.length < 3, message: messages.nameNotValid }
                ],
                username: [
                    { condition: this.dataModel.username.length > 0 && this.dataModel.username.length < 3, message: messages.usernameNotValid },
                    { condition: this.dataModel.username.length >= 3 && !usernameRegex.test(this.dataModel.username), message: messages.usernameMustBeEnglish }
                ],
                gender: [
                    { condition: !this.dataModel.gender, message: messages.genderRequired }
                ],
                nationalCode: [
                    {
                        condition: this.dataModel.nationalCode.length > 0 && this.dataModel.nationalCode.length !== 10,
                        message: messages.nationalCodeNotValid
                    }
                ],
                avatarSID: [
                    {
                        condition: !this.dataModel.avatarSID,
                        message: messages.avatarRequired
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
                this.submitCreateChild();
            }
        },

        async submitCreateChild() {
            const toastMessage = ToastMsg()

            const formData: FormData = await usePrepareFormData(this.dataModel)

            this.loading = true
            const { data, status, error }: ResultApiType = await POST_CREATE_CHILD(formData)
            this.loading = false
            
            if (status == 'success') {
                toastMessage.ToastSuccessMsg({ message: messages.createChildSuccessfully })
                navigateTo('/my-account/management-child/list')
                this.dataError = useClearErrors(this.dataError)
            } else if (status == 'error') {
                if (error == null) {
                    toastMessage.ToastErrMsg({ message: data.message })
                    return;
                }
                this.dataError = useUpdateErrors({ dataError: this.dataError, errorList: error })
                if (this.dataError.avatarSID.length > 0) {
                    toastMessage.ToastErrMsg({ message: this.dataError.avatarSID })
                }
            }
        }
    }
})