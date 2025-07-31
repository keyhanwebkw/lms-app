import type { Pagination } from "./global"

export interface DataCardNotification {
    dataList: DetailsCardNotification
}

interface DetailsCardNotification {
    ID: number
    title: string
    content: string
    type: string
    subTitle: string
    read: number
    created: number
}


export interface DataNotificationListState {
    loading: boolean
    listNotification: DetailsCardNotification[]
    pagination: Pagination
}
