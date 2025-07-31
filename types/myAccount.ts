import type { StorageResourceType } from "./global"

export interface UserProfileState {
    profile: UserProfileModel
    loading: boolean
    popup: boolean
    dataModel: UserProfileModel
    dataError: DetailsDataError
    loadingBtn:boolean
}

export interface DetailsDataError {
    name: string
    family: string
    gender: string
    nationalCode: string
}

export interface UserProfileModel {
    name: string
    family: string
    userName?:string
    mobile?: string
    gender: 'none' | 'female' | 'male'
    birthDate: string | number
    nationalCode: string
    avatarSID: StorageResourceType 
}
export interface userAccount {
    dataList: DetailsCardUserAccount
}

interface DetailsCardUserAccount {
    id: string | number
    title: string
    icon: string
    slug: string
}

export interface DataManageTime {
    showTime: boolean
    hour: number,
    minute: number,
}

export interface StatusCheckTime {
    checked: boolean

}

export interface InfoUserGallery {
    name: string
    family: string
    name_child: string
    avatar: string
}

export interface ChangePasswordState {
    loading: boolean
    dataError: DetailsDataChangePassword
    dataModel: DetailsDataChangePassword
}

interface DetailsDataChangePassword {
    oldPassword: string
    newPassword: string
    newPasswordConfirmation: string
}