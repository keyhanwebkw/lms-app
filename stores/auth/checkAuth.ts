import { getIndexedDB } from "~/services/db/indexedb"
import { ToastMsg } from "../global/toast"
import { messages } from "~/static/messages"

export const CheckUserAuth = defineStore('CheckUserAuth', {
    state: () => <{ hasToken: boolean }>({
        hasToken: false
    }),
    actions: {
        async checkUserHasToken() {
            this.hasToken = await getIndexedDB('token') ? true : false
            if (!this.hasToken) {
                ToastMsg().ToastErrMsg({ message: messages.unAuthentication })
                navigateTo('/auth/enter-phone')
            }
        }
    }
})