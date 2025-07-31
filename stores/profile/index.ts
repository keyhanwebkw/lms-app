import { ConvertTimestampToDate, convertToTimestamp } from "~/func/GenerateDate";
import { GET_USER_PROFILE, POST_USER_PROFILE_UPDATE } from "~/services/api/user";
import { messages } from "~/static/messages";
import type { UserProfileModel, UserProfileState } from "~/types/myAccount";
import { ToastMsg } from "../global/toast";
import type { ResultApiType, StorageResourceType } from "~/types/global";
import { dataAvatarsSID } from "~/static/dataAavatarsSID";
export const UserProfile = defineStore('UserProfile', {
    state: () => <UserProfileState>({
        profile: {},
        loading: true,
        popup: false,
        loadingBtn: false,
        dataModel: {
            avatarSID: {
                SID: '',
                extension: '',
                fullSID: '',
                fileName: '',
                fileSize: 0,
                fileType: '',
                width: 0,
                height: 0,
                duration: 0
            }
        } as UserProfileModel,
        dataError: {
            name: '',
            family: '',
            gender: '',
            nationalCode: ''
        }

    }),
    actions: {
        async clearDataProfile() {
            this.profile = {
                name: '',
                family: '',
                mobile: '',
                gender: 'male',
                birthDate: NaN,
                nationalCode: '',
                avatarSID: {} as  StorageResourceType
            },
                this.popup = false
        },
        async getUserProfile() {
            this.loading = true
            const { data } = await GET_USER_PROFILE()
            this.profile = { ...data.profile }
            this.dataModel.avatarSID.fullSID = this.profile.gender == 'male' ? dataAvatarsSID[5] : dataAvatarsSID[4]
            console.log(this.profile.gender)
            this.profile.birthDate = ConvertTimestampToDate(this.profile.birthDate)
            this.loading = false
        },

        async handleFormUpdateProfile() {
            this.dataError = useClearErrors(this.dataError)
            const rules: Record<string, { condition: boolean, message: string }[]> = {
                name: [
                    { condition: !this.profile.name, message: messages.nameRequired },
                    { condition: this.profile.name?.length < 3, message: messages.nameNotValid }
                ],
                family: [
                    { condition: !this.profile.family, message: messages.familyRequired },
                    { condition: this.profile.family?.length < 3, message: messages.familyNotValid }
                ],
                gender: [
                    { condition: !this.profile.gender, message: messages.genderRequired }
                ],
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

                this.submitEditFormProfile();
            }
        },

        setDataForm() {
            this.dataModel.name = this.profile.name
            this.dataModel.family = this.profile.family
            this.dataModel.nationalCode = this.profile.nationalCode
            this.dataModel.gender = this.profile.gender
            this.dataModel.birthDate = this.profile.birthDate
        },

        async submitEditFormProfile() {
            const toastMessage = ToastMsg()
            this.setDataForm()
            const formData: FormData = await usePrepareFormData(this.dataModel)

            this.loadingBtn = true
            const { data, status, error }: ResultApiType = await POST_USER_PROFILE_UPDATE(formData)
            this.loadingBtn = false

            if (status == 'success') {
                toastMessage.ToastSuccessMsg({ message: messages.editParentSuccessfully })
                this.dataError = useClearErrors(this.dataError)
                navigateTo('/my-account')
            } else if (status == 'error') {
                if (error == null) {
                    toastMessage.ToastErrMsg({ message: data.message })
                    return;
                }else {
                    toastMessage.ToastErrMsg({ message: error[0].message })
                }
                this.dataError = useUpdateErrors({ dataError: this.dataError, errorList: error })
            }
        }
    }
})