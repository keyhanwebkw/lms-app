import type { SendOTPStoreState } from "~/types/auth"
import type { ResultApiType } from "~/types/global"

import { ToastMsg } from "~/stores/global/toast"
import { removeItemIndexdDB, setIndexedDB } from "~/services/db/indexedb"
import { defaultCountryCode, regExpMobile } from "~/services/constants"
import { POST_USER_SEND_OTP } from "~/services/api/user"
import { nextStateData } from "~/services/constants/nextStatePage"
import { messages } from "~/static/messages"

export const useSendOTPStore = defineStore('useSendOTPStore', {
    state: () => <SendOTPStoreState>({
        dataModel: {
            mobile: '',
            countryCode: defaultCountryCode
        },
        dataError: {
            mobile: '',
            countryCode: ''
        },
        loading: false,
    }),
    actions: {
        async clearData() {
            this.dataModel.mobile = ''
            this.dataError = useClearErrors(this.dataError)
        },
        async validateForm() {
            const toastMsgStore = ToastMsg()

            this.dataError = useClearErrors(this.dataError)
            if (this.dataModel.mobile.length == 0) {
                this.dataError.mobile = messages.mobileRequired
                return;
            } else if (!regExpMobile.test(this.dataModel.mobile)) {
                this.dataError.mobile = messages.mobileNotValid
                return;
            } else {
                await this.processRequest()
            }
        },

        async processRequest() {
            await removeItemIndexdDB('profile')
            await removeItemIndexdDB('token')

            this.loading = true
            const { data, error, status }: ResultApiType = await POST_USER_SEND_OTP({ mobile: this.dataModel.mobile, countryCode: this.dataModel.countryCode })
            this.loading = false
            if (status == 'success') {
                setIndexedDB('message-OTP', data.sentOTPDescription)
                setIndexedDB('user-phone', this.dataModel.mobile)
                this.dataError = useClearErrors(this.dataError)
                navigateTo(nextStateData[data.nextState])
            } else if (status == 'error') {
                this.dataError = useUpdateErrors({ dataError: this.dataError, errorList: error })
            }
        }
    }
})