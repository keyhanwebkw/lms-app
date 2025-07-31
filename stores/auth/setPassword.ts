import type { SetPassState } from "~/types/auth"
import { POST_SET_PASSWORD } from "~/services/api/user"
import { ToastMsg } from "~/stores/global/toast"
import { nextStateData } from "~/services/constants/nextStatePage"
import type { ResultApiType } from "~/types/global"

export const SetPassword = defineStore('SetPassword', {
    state: () => <SetPassState>({
        dataModel: {
            password: '',
            rePassword: ""
        },
        dataError: {
            password: '',
            rePassword: ''
        },
        loading: false
    }),
    actions: {
        
        async clearCatch() {
            this.dataModel.rePassword = ''
            this.dataModel.password = ''
            this.dataError = useClearErrors(this.dataError)
        },

        async hendelPasswordSimilarity() {
           this.dataError.rePassword = this.dataModel.rePassword && this.dataModel.password !== this.dataModel.rePassword ? 'رمزهای ورود وارد شده مطابقت ندارند'
            : '';
        },
        
        async SubmitHandler() {
            if (this.dataModel.password !== this.dataModel.rePassword) {
                this.dataError.rePassword = 'رمزهای ورود وارد شده مطابقت ندارند'
            }
            else if (this.dataModel.password.length <= 3 || this.dataModel.password.length >= 34) {
                this.dataError.password = "رمز عبور باید حداقل 4 کاراکتر و حداکثر 34 کاراکتر باشد ."
            }
            else {
                this.loading = true
                const { data, error, status }: ResultApiType = await POST_SET_PASSWORD(this.dataModel.password)
                if (status == "success") {
                    ToastMsg().ToastSuccessMsg({ message: 'رمز عبور شما با موفقیت ثبت شد .' })

                    this.dataError = useClearErrors(this.dataError)
                    navigateTo(nextStateData[data.nextState])
                } else if (status == "error") {
                    this.dataError = useUpdateErrors({ dataError: this.dataError, errorList: error })
                }
                this.loading = false
            }
        },

    }
})