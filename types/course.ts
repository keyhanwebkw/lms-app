import type { DetailsStatus, RelatedPostDataModel, Pagination, StorageResourceType } from "~/types/global"

// card course 
export interface DataCardCourse {
    dataList: DetailsCoursesList
}
export interface DataSliderCardCourse {
    dataList: DetailsCardCourse[]
}
interface DetailsCardCourse {
    ID: number | string
    name: string
    teacher: DetailsTeacher
    banner: StorageResourceType
    duration: number
    price: number
    slug: string
    status: DetailsStatus
    totalPrice: number

}


interface DetailsTeacher {
    ID: number
    name: string
    family: string
    avatar: StorageResourceType
}

//  card quizze

export interface DataInfoCardQuizze {
    dataQuizze: DetailsInfoCardQuizze
}

interface DetailsInfoCardQuizze {
    ID: string | number
    title: string
    status: DetailsStatus
    numberQuestion: number
    testLevel: 'easy' | 'average' | 'hard' | string
}

// card status Quizze

export interface DataStatusQuizze {
    dataStatus: DetailsDataStatus
}

interface DetailsDataStatus {
    title: string
    answered: number
    totalNumberQuestion: number
    status: 'passed' | 'rejected' | string
    // descrption: string فعلا به  این حالت در میارم تا مشخص بشه  از سمت بک چیجوری میاد 
    // correctPercentageQuestion: number همچنین این مورد رو 
}



// slider filter course
export interface DataSliderFilterCourse {
    dataListFilter: DetailsFilterCourse[]
}

interface DetailsFilterCourse {
    ID: number | string
    title: string
    icon: string

}


// details item info
export interface DataDetailsInfo {
    type: string
    category: string
    status: 'ongoing' | 'completed' | 'upcoming'
    title: string
    duration: number
    teacher: Teacher
}

export interface DetailsItem {
    id: number
    icon: string
    title: string
    value: string
}

export interface DataPriceInfo {
    price: number
    discountPercentage: number
    discountAmount: number
}


// section course 

export interface DataSectionCourse {
    listSection: DetailsHeadline
    activeSection: number
    loadingEpisode: boolean
    listEpisode: DetailsEpisode[]
    countSection: string
}

// card headline
export interface DataListSection {
    section: DetailsHeadline
    countSection: string
    isOpen: boolean
}
export interface DetailsHeadline {
    ID: number
    title: string
}


// faq 

export interface DataListFaq {
    dataFaq: DetailsFaq
}

interface DetailsFaq {
    ID: number
    question: string
    answer: string
}


//  store self course

export interface DataSelfState {
    activeFaq: number
    detailsCourse: DetailsCourse
    loading: boolean
    loadingRelated: boolean
    loadingEpisode: boolean
    activeEpisode: number
    listEpisode: DetailsEpisode[]
    filteredEpisodes: DetailsEpisode[]
    lisRelated: DetailsCardCourse[]
    dataModelRelated: RelatedPostDataModel
    isFetchRelated:boolean
}
export interface DetailsCourse {
    ID: number
    courseSection: DetailsCourseSection[]
    description: string
    price: number
    discountAmount: number
    totalPrice: number
    status: 'ongoing' | 'completed' | 'upcoming'
    score: number
    teacher: Teacher,
    name: string
    slug: string
    type: string
    duration: number
    participants: number
    participantLimitation: number
    level: string
    startDate: number
    endDate: number
    banner: StorageResourceType
    introVideo: string,
    discountPercentage: number
    category: DetailsCategoryCourse
}

interface DetailsCategoryCourse {
    ID: number
    title: string
    slug: string
}

interface DetailsCourseSection {
    ID: number
    title: string
}

// category list store
export interface CourseCategoryListState {
    list: DetailsCourseCategory[]
    loading: boolean
}

export interface DetailsCourseCategory {
    ID: number
    title: string
    slug: string
    description: string
    photoSID: StorageResourceType
    metaTitle: string
    metaDescription: string
    metaKeyword: string
}

// courses store 
export interface DetailsCoursesList {
    ID: number | string
    name: string
    description?: string
    duration: number
    type?: "audio" | "video"
    price: number
    discountAmount?: number
    totalPrice: number
    status: DetailsStatus
    score?: number
    slug: string
    startDate?: number
    endDate?: number
    banner: StorageResourceType | null
    teacher: Teacher
}

export interface Teacher {
    ID: number
    name: string
    family: string
    avatar: StorageResourceType
}

export interface CoursesListState {
    list: DetailsCoursesList[]
    loading: boolean
    pagination: Pagination
    dataModel: ModelFilterCourse
}

export interface ModelFilterCourse {
    name: string
    categorySlug: string,
    page: number,
    sort: Record<string, string>
}

export interface DataEpisode {
    dataList: DetailsEpisode
    count: number
}

export type DetailsEpisodeType = 'content' | 'assignment' | 'exam'
export interface DetailsEpisode {
    ID: number
    title: string
    type: DetailsEpisodeType
    content?: StorageResourceType
    permission: boolean
    isDone: boolean
    score?: number
    courseSectionID: number
    description?: string
    duration?: string
    questionCount?: number
}



export interface DataModelOpenEpisode {
    type: DetailsEpisodeType
    id:number
    permission:boolean
}