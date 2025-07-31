import type { StorageResourceType } from "./global"

export interface DetailsChild {
    ID: number
    name: string
    type: 'parent' | 'child'
    username: string
    geneder: 'none' | 'female' | 'male'
    avatarSID: StorageResourceType
}

// store child list
export interface ChildListState {
    loading: boolean
    list: DetailsChild[]
}

// store child create
export interface ChildCreateState {
    loading: boolean
    dataModel: DataModelCreateChild
    dataError: DataErrCreateChild
    avatar: {
        popup: boolean
    }
}

export interface DataModelCreateChild {
    name: string
    username: string
    nationalCode: string
    birthDate: number | string
    gender: '' | 'female' | 'male'
    avatarSID: string
}

interface DataErrCreateChild {
    name: string
    username: string
    nationalCode: string
    birthDate: string
    gender: string
    avatarSID: string
}