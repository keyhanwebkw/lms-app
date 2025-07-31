import { GET_USER_PROFILE, POST_CHANGE_PASSWORD } from "~/services/api/user";
import { messages } from "~/static/messages";
import type { ChangePasswordState } from "~/types/myAccount";
import { ToastMsg } from "../global/toast";
import type { ResultApiType } from "~/types/global";

export const ChangePassword = defineStore('ChangePassword', {
    state: () => <ChangePasswordState>({
        dataError: {},
        dataModel: {},
        loading: false
    }),
    actions: {

        clearDataModel() {
            this.dataModel = {
                oldPassword: '',
                newPassword: '',
                newPasswordConfirmation: '',
            }
        },

        async handleChangePassword() {
            this.dataError = useClearErrors(this.dataError)
            const rules: Record<string, { condition: boolean, message: string }[]> = {
                oldPassword: [
                    { condition: !this.dataModel.oldPassword, message: messages.oldPasswordRequired },
                ],
                newPassword: [
                    { condition: !this.dataModel.newPassword, message: messages.newPasswordRequired },
                ],
                newPasswordConfirmation: [
                    { condition: !this.dataModel.newPasswordConfirmation, message: messages.confirmPasswordRequired },
                    { condition: this.dataModel.newPasswordConfirmation !== this.dataModel.newPassword, message: messages.newPasswordNotSame }
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
                this.submitCreateChild();
            }
        },

        async submitCreateChild() {
            const toastMessage = ToastMsg()

            const formData: FormData = await usePrepareFormData(this.dataModel)

            this.loading = true
            const { data, status, error }: ResultApiType = await POST_CHANGE_PASSWORD(formData)
            this.loading = false

            if (status == 'success') {
                toastMessage.ToastSuccessMsg({ message: messages.changePasswordSuccessfully })
                navigateTo('/my-account')
                this.dataError = useClearErrors(this.dataError)
            } else if (status == 'error') {
                if (error == null) {
                    toastMessage.ToastErrMsg({ message: data.message })
                    return;
                } else {
                    toastMessage.ToastErrMsg({ message: error[0].message })
                }
                this.dataError = useUpdateErrors({ dataError: this.dataError, errorList: error })
            }
        }
    }
})