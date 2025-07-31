

export interface DataCardPrivileges {
    type: 'score' | 'wallet'
    score?: number
    price?: number
}

export interface DataListQuickAccess {
    dataList: DetailsQuickAccess
}

interface DetailsQuickAccess {
    ID:number
    slug:string
    title:string
    color:string
    icon:string
}
export interface DataListBanner {
    dataList: DataBanners[]
}

interface DataBanners {
    id: number
    src: string
    alt: string
}