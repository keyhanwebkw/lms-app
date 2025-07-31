import type { ResultApiType } from "~/types/global";
import type { EnterPasswordState } from "~/types/auth";

import { POST_LOGIN_USER, POST_USER_SEND_OTP } from "~/services/api/user";
import { nextStateData } from "~/services/constants/nextStatePage";
import { getIndexedDB, setIndexedDB } from "~/services/db/indexedb";
import { ToastMsg } from "~/stores/global/toast";
import { messages } from "~/static/messages";

export const EnterPassword = defineStore("EnterPassword", {
  state: () =>
    <EnterPasswordState>{
      dataModel: {
        password: "",
        mobile: "",
      },
      dataError: {
        password: "",
        mobile: "",
      },
      dataProfile: {},
      loading: false,
      loadingForget: false,
    },
  actions: {
    async clearCatch() {
      this.dataModel.password = "";
      this.dataError.password = "";
    },

    async getMobile() {
      this.dataModel.mobile = await getIndexedDB("user-phone");
      this.checkHasMobile();
    },

    async checkHasMobile() {
      if (!this.dataModel.mobile) {
        ToastMsg().ToastErrMsg({ message: messages.reEnterMobile });
        navigateTo("/auth/enter-phone");
      }
    },

    async submitLoginUser() {
      const ToastMessage = ToastMsg();
      this.checkHasMobile();

      if (this.dataModel.password.length == 0) {
        this.dataError.password = messages.passwordRequired;
      } else if (
        this.dataModel.password.length <= 3 ||
        this.dataModel.password.length >= 34
      ) {
        this.dataError.password = messages.passwordCharacterValidLength;
      } else {
        this.loading = true;
        const { error, data, status }: ResultApiType = await POST_LOGIN_USER({
          mobile: this.dataModel.mobile,
          password: this.dataModel.password,
        });
        this.loading = false;


        if (status == "success") {
          setIndexedDB("token", data.token);
          ToastMessage.ToastSuccessMsg({
            message: messages.loginSuccessful,
            time: 2000,
          });
          navigateTo(nextStateData[data.nextState]);
        } else if (status == "error") {
          if (error) {
            this.dataError = useUpdateErrors({
              dataError: this.dataError,
              errorList: error,
            });
            if (this.dataError.mobile.length > 0) {
              ToastMessage.ToastErrMsg({ message: this.dataError.mobile });
              navigateTo("/auth/enter-phone");
            }
          }else {
            ToastMessage.ToastErrMsg({message : data.message})
          }

        }
      }
    },

    async reqForgetPassword() {
      const mobile = await getIndexedDB("user-phone");
      const { status, data, error } = await POST_USER_SEND_OTP({
        countryCode: "+98",
        mobile: mobile,
        action: "setPassword",
      });
      if (status == "success") {
        navigateTo(nextStateData[data.nextState]);
        setIndexedDB("user-phone", mobile);
        setIndexedDB("message-OTP", data.sentOTPDescription);
      } else if (status == "error") {
        if (error == null) {
          ToastMsg().ToastErrMsg({ message: data.message });
        } else {
          this.dataError = useUpdateErrors({
            dataError: this.dataError,
            errorList: error,
          });
        }
      }
    },
  },
});
