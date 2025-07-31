
import type { RelatedPostDataModel, Pagination, StorageResourceType } from "./global"


export interface DataCardBlog {
    dataList: DetailsCardBlog
}
export interface DataSliderCardBlog {
    dataList: DetailsCardBlog[]
}

export interface DetailsCardBlog {
    ID: number
    title: string
    slug: string
    categories?: DetailsCategoryBlog[]
    readingTime: number
    posterSID: StorageResourceType
    created?:number
}

export interface DetailsCategoryBlog {
    ID: number
    title: string
    slug: string
    description: string
    metaTitle: string
    metaDescription: string
    metaKeyword: string
    photoSID: StorageResourceType
}

export interface DataCardAuthorBlog {
    avatar: string
    name: string
    family: string
    description: string
}


export interface DataImgInfoDetailsBlog {
    posterSID: StorageResourceType
    created: number
    readingTime: number
}

// list blog store
export interface BlogListState {
    list: DetailsCardBlog[]
    loading: boolean
    pagination: Pagination
    dataModel: ModelFilterBlog
    category: {
        details: DetailsCategoryBlog
        list: DetailsCategoryBlog[]
        loading: boolean
    }
}

export interface ModelFilterBlog {
    title: string
    categorySlug: string
    page: number
}

export interface DataCardThumbnail {
    posterSID: StorageResourceType
    created: number
    readingTime: string
}



export interface DataGetBlogState {
    dataGet: DetailsGetBlog
    loading: boolean
    pageNotFound: boolean
    loadingRelated: boolean
    dataModelRelated: RelatedPostDataModel
    listRelated:DetailsCardBlog[]
    isFetch:boolean
}

export interface DetailsGetBlog {
    ID: number
    title: string
    slug: string
    introduction: string
    content: string
    author: string
    readingTime: string
    metaTitle: string
    metaDescription: string
    metaKeyword: string
    created: number
    posterSID: StorageResourceType
    category: DetailsCategory[]
}

export interface DetailsCategory {
    ID: number
    title: string
    slug: string
}


export interface DataSectionThumbnail {
    title: string
    posterSID: StorageResourceType
    created: number
    readingTime: string
}
