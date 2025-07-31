import { defineStore } from 'pinia'
import { POST_LOGOUT } from '~/services/api/user'
import { removeItemIndexdDB } from '~/services/db/indexedb'
import type { TypeLogoutState } from '~/types/auth'


export const LogoutUser = defineStore('Logout', {
    state: () => <TypeLogoutState>({
        resultLogout: [],
        loading: false,
        showPopup: false,
    }),
    actions: {
        async UserLogout() {
            this.loading = true
            this.resultLogout = await POST_LOGOUT()
            let itemsRemove = ['profile', 'token', 'user-phone', 'dataInit', 'message-OTP']
            itemsRemove.forEach((item: string) => {
                removeItemIndexdDB(item)
            })
            this.loading = false
            this.showPopup = false
            navigateTo('/auth/enter-phone')
        }
    }
})