export interface UserSendOTP {
    mobile: string
    countryCode: string
    webOTP?: boolean
    action?: 'register' | 'setPassword' | 'changeMobileValidateCurrentMobile' | 'changeMobileValidateNewMobile'
}

export interface UserLogin {
    mobile: string
    countryCode?: string
    OTP?: string
    password?: string
}

