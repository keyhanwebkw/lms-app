import type { DetailsFaq } from "./course"
import type { StorageResourceType } from "./global"

export interface DataListQuickAccess {
    dataList: DetailsQuickAccess
}

interface DetailsQuickAccess {
    ID: number
    slug: string
    title: string
    color: string
    icon: string
}
export interface DataListBanner {
    dataList: DataBanners[]
}

interface DataBanners {
    link: string
    banner: StorageResourceType
}

// posterHome page 
export interface DataHeroHomePage {
    title: string
    description: string
    posterSID: StorageResourceType
}

// statictis

interface DetailsSectionStatictis {
    id: number
    color?: string
    count?: number
    description?: string
    icon?: string
    title?: string
    translations: any
    created_at?: number
    order?: number

}

// feature
export interface DataContentFeature {
    dataListItemFeature: DetailsSectionStatictis
}

export interface DataFeature {
    dataListFeature: DetailsSectionStatictis[]
}

// section video 
export interface DataSectionVideo {
    title: string
    description: string
    feature: DetailsSectionStatictis[]
    hero_vector: string
}


// faq
export interface DataFaq {
    title: string
    listFaq: DetailsFaq[]
}


// book meeting
export interface DataBookMeeting {
    title: string
    description: string
    background: string
    link: string
}

// course
export interface TypeCardCourse {
    dataList: TypeDetailsCardCourse
}

export interface TypeCardSliderCourse {
    dataList: TypeDetailsCardCourse[]
    pageTitle?: string | undefined
    loading?: boolean
}
interface TypeDetailsCardCourse {
    name: any
    ID: number | string
    image_cover: string
    title: string
    description: string
    type: string
    teacher: DetailsTeacher
    duration: string | number
    points: number
    capacity: number
    price: string | number
    thumbnail: string
    slug: string
}

interface DetailsTeacher {
    name: any
    family: any
    full_name: string
    id: number
}


// blog



export interface DataCardBlog {
    dataList: detailsDataCardBlog
    dataListCategory?: DetailsDataCategoryBlog[]
}

export interface DataSliderCardBlog {
    dataList: detailsDataCardBlog[]
    dataListCategory: DetailsDataCategoryBlog[]
}

interface DetailsDataCategoryBlog {
    id: number | string,
    title: string,
    slug: string
}

interface detailsDataCardBlog {
    ID: string | number
    author: DetailsAuthor
    created_at: number
    slug: string
    image: string
    name: string
    enable_comment: number
    translations: DetailsTranslationsCardBlog[]
}

interface DetailsAuthor {
    id: number | string
    full_name: string
}

interface DetailsTranslationsCardBlog {
    title: string
    description: string
}