import type { DetailsStatus } from "./global"

export interface DataCardSupport {
    dataList: DetailsCardTicket
}
export interface DetailsCardTicket {
    ID: number | string
    title: string
    description: string
    created: string | number
    status: DetailsStatus
}


export interface DataCardSelfSupport {
    dataList: DetailsCardSelfSupport
    dataUser: DetailsDataUser[]
}

interface DetailsCardSelfSupport {
    id: number
    userID: number
    description: string
    created: number
    attachedFiles: DetailsAttachedFilesSelfSupport[]
    role: 'user' | 'admin' | string
    src_download_attached: string
}

export interface DetailsAttachedFilesSelfSupport {
    type: 'image' | 'video' | 'mp3' | 'voice' | string
    width?: number
    height?: number
    size: number
    src: string
}

export interface DetailsDataUser {
    id: number
    name: string
    family: string
    avatar: string
}

export interface DataSelfSupportState {
    video: DetailsAttachedFilesSelfSupport
    image: DetailsAttachedFilesSelfSupport
    openModalImage: boolean
    openModalVideo: boolean
}


export interface DataListStatus {
    dataList: DetailsItemStatus[]
}

interface DetailsItemStatus {
    id: number
    title: string
    status: 'pending' | 'answered' | 'closed' | string
    icon: string
}

// store
export interface NewTicketRequestState {
    departments: {
        loading: boolean
        list: DetailsDepartment[]
    }
    dataModel: DataModelSendTicket
    loading: boolean
}

export interface DetailsDepartment {
    ID: number,
    name: string
    slug: string
}

export interface DataModelSendTicket {
    title: string
    departmentID: string 
    message: string
}