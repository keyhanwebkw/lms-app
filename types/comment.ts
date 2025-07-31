// comment

import type { EntityType, StorageResourceType } from "./global"


export interface InfoProfile {
    ID?: number | string
    name: string,
    family: string
    image?: string
    created?: number
}
export interface DataCommentState {
    tableID: number
    dataModel: ModelSendComment
    loadingBtn: boolean
    type: EntityType
    clearInput: boolean
    dataModelList: ModelListComment
    listComment: DetailsCardComment[]
    showAllCommentOriginal: boolean
    allComment: DetailsCardComment[]
    parentContent: string
    parentAuthor: string
    isReplying: boolean
    isFetch: boolean
    loading:boolean
}

export interface ModelSendComment {
    commentableType: EntityType
    commentableID: number
    parentID?: number
    content: string
}

export interface ModelListComment {
    commentableType: EntityType
    commentableID: number
    page?: number
}

export interface DataCardComment {
    dataList: DetailsCardComment
    depth: number
    parentText?: string
    isAdmin: boolean
    parentID?: number
    author?: string
}

export interface DetailsCardComment {
    ID: number
    author: string
    isAdmin: boolean
    avatar: StorageResourceType
    content: string
    created: number
    replies: DetailsCardComment[]
    hasReply: boolean
}


export interface DataPreviewComment {
    author: string
    content: string
} 
