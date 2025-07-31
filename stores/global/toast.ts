import { defineStore } from 'pinia'
import type { ToastMsgProps, ToastAction } from '~/types/global'

export const ToastMsg = defineStore('ToastMsg', {
    state: () => <ToastMsgProps>({
        type: undefined,
        status: false,
        msg: ""
    }),

    actions: {
        async ToastSuccessMsg({ message, time = 3000 }: ToastAction) {
            this.type = 'success'
            this.status = true
            this.msg = message
            setTimeout(() => {
                this.status = false
                this.msg = ''
            }, time);
        },
        async ToastErrMsg({ message, time = 3000 }: ToastAction) {
            this.type = 'error'
            this.status = true
            this.msg = message
            setTimeout(() => {
                this.status = false
                this.msg = ''
            }, time);
        },


    }

})