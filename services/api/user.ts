import type { UserLogin, UserSendOTP } from "~/types/api"
import { filterInvalidData } from "~/func/filterInvalidData"
import { defaultCountryCode } from "../constants/index"
import type { UserProfileModel } from "~/types/myAccount"
import { convertToTimestamp } from "~/func/GenerateDate"


export async function POST_USER_SEND_OTP({ mobile, countryCode = defaultCountryCode, action, webOTP }: UserSendOTP) {
    let data: Partial<UserSendOTP> = { mobile, countryCode, action, webOTP }
    data = filterInvalidData(data)
    return await useApi({ url: '/user/sendOTP', data: data })
}

export async function POST_LOGIN_USER({ mobile, countryCode = defaultCountryCode, OTP, password }: UserLogin) {
    let data: Partial<UserLogin> = { mobile, countryCode, OTP, password }
    data = filterInvalidData(data)
    return await useApi({ url: '/user/login', data: data })
}

export async function POST_SET_PASSWORD(password: string) {
    let data = {
        password: password
    }
    return await useApi({ url: 'user/profile/setPassword', data: data })
}

export async function POST_SET_PROFILE(formData: FormData) {
    return await useApi({ url: '/user/profile/set', data: formData })
}

export async function GET_USER_PROFILE() {
    return await useApi({ url: '/user/profile/get' })
}

export async function POST_USER_PROFILE_UPDATE(formData: FormData) {


    return await useApi({ url: '/user/profile/update', data: formData })
}

export async function POST_LOGOUT() {
    return await useApi({ url: '/user/logout' })
}


export async function POST_CHANGE_PASSWORD(formData:FormData) {
    return await useApi({ url: '/user/profile/changePassword',data:formData })
}


