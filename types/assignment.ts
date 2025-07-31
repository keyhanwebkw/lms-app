import type { DetailsStatus, StorageResourceType } from "./global"

export interface DataGeneralitiesAssignmentState {
    dataAssignment: DetailsAssignment
    dataUserContent: DetailsUserContent[]
    dataManagerResponse: DetailsManagerResponse
    dataReceivePermission: DetailsReceivePermission
    dataContentAssignment: DetailsUserContent
    submissionDeadline: number
    status: DetailsStatus
    isAllowedToSend: boolean
    loading: boolean
    pageNotFound: boolean
    loadingReceive: boolean
    popupContentAssignment: boolean
    assignmentID: number
    userAssignmentID: number
}

export interface DataContentPopupAssignment {
    dataContentAssignment: DetailsUserContent
    showPopup: boolean
}

export interface DataUserContent {
    dataListContent: DetailsUserContent[]
    status: DetailsStatus
}
export interface DetailsAssignment {
    ID: number
    deadline: number
    title: string
    score: number
    minScoreToPass: number
    retryCount: number
}
export interface DetailsUserContent {
    ID: number
    title: string
    description?: string
    text?: string
    content: StorageResourceType
}
export interface DetailsManagerResponse {
    ID: number
    text: string
    receivedScore: number
    retryCount: number
    isAccepted: boolean
}

export interface DetailsReceivePermission {
    isAllowedToReceive: boolean
    errorCode: number
    errorMessage: string
}

export interface DataCardAssignment {
    dataAssignment: DetailsAssignment
    status: DetailsStatus
    submissionDeadline: number
    isAllowedToReceive: boolean
    dataManagerResponse: DetailsManagerResponse
    loadingBtn: boolean
}

export interface DataInfoAssignment {
    text?: string
    slug: string
    bg: string
}


export interface ModelSendContentAssignment {
    text: string
    content: File[]
    assignmentID: number
}
