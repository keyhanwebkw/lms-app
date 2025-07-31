import type { ResultApiType } from '~/types/global';
import type { VerifyPhoneState } from '~/types/auth';

import { ToastMsg } from "~/stores/global/toast"
import { getIndexedDB, removeItemIndexdDB, setIndexedDB } from '~/services/db/indexedb';
import { POST_LOGIN_USER, POST_USER_SEND_OTP } from '~/services/api/user';
import { nextStateData } from '~/services/constants/nextStatePage';
import { defaultCountryCode } from '~/services/constants';
import { messages } from '~/static/messages';

export const VerifyPhone = defineStore('VerifyPhone', {
    state: () => <VerifyPhoneState><unknown>({
        dataModel: {
            num1: NaN,
            num2: NaN,
            num3: NaN,
            num4: NaN,
            num5: NaN,
          
        },
        code: '',
        mobile: '',
        timer: '02:00',
        msg: 'کد برای شماره شما ارسال شد.',
        statusDisabled: true,
        loading: false,
        loadingResend: false,
    }),
    actions: {

        async clearDataModel() {
            this.dataModel = {
                num1: NaN,
                num2: NaN,
                num3: NaN,
                num4: NaN,
                num5: NaN,
              
            }
        },

        async countDown() {
            this.timer = '02:00';
            this.statusDisabled = true;
            let interval: any = null;

            if (interval) clearInterval(interval);

            interval = setInterval(() => {
                if (!this.timer) return;

                let [minutes, seconds] = this.timer.split(":").map(Number);

                if (minutes === 0 && seconds === 0) {
                    this.timer = '00:00';
                    clearInterval(interval);
                    this.statusDisabled = false;
                    return;
                }

                if (seconds === 0) {
                    minutes -= 1;
                    seconds = 59;
                } else {
                    seconds -= 1;
                }

                this.timer = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
            }, 1000);
        },


        async resendCode() {
            const ToastMeesage = ToastMsg()
            this.mobile = await getIndexedDB('user-phone')
            this.clearDataModel()

            this.loadingResend = true
            const { status, error, data }: ResultApiType = await POST_USER_SEND_OTP({ mobile: this.mobile, countryCode: defaultCountryCode })
            this.loadingResend = false

            if (status == "success") {
                setIndexedDB("message-OTP", data.sentOTPDescription)
                this.getMsg()
                this.countDown()
                ToastMeesage.ToastSuccessMsg({ message: messages.OTPResent })
            }
            else if (status == "error") {
                ToastMeesage.ToastErrMsg({ message: error[0].message })
            }
        },

        async checkLengthValue() {
            Object.keys(this.dataModel).forEach(key => {
                const typedKey = key as keyof typeof this.dataModel;
                this.dataModel[typedKey] = Number(this.dataModel[typedKey].toString().slice(0, 1));
            });
        },

        async updateOutput() {
            this.code = `${this.dataModel.num1}${this.dataModel.num2}${this.dataModel.num3}${this.dataModel.num4}${this.dataModel.num5}`
        },

        async getMsg() {
            this.clearDataModel()
            this.mobile = await getIndexedDB('user-phone')
            this.msg = `کد برای شماره ${this.mobile} ارسال شد.`
            if (await getIndexedDB('message-OTP')) {
                this.msg = await getIndexedDB('message-OTP')
            }
        },


        async submitSendOtp() {
            const ToastMeesage = ToastMsg()
            if (this.code.length !== 5) {
                ToastMeesage.ToastErrMsg({
                    message: messages.codeNotValid
                })
            } else {
                this.loading = true
                const { error, data, status }: ResultApiType = await POST_LOGIN_USER({ mobile: this.mobile, OTP: this.code })
                this.loading = false

                if (status == "success") {
                    setIndexedDB('token', data.token)

                    navigateTo(nextStateData[data.nextState])

                    removeItemIndexdDB('user-phone')
                    removeItemIndexdDB('message-OTP')
                }
                if (status == "error") {
                    ToastMeesage.ToastErrMsg({
                        message: error[0].message
                    })
                }
            }
        },
    }
})