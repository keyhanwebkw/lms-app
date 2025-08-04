
export type EntityType = 'Course' | 'Article' | null
export interface AutoCompleteSearch {
    modelValue: string;
    dataList: any;
    loading: boolean;
    placeholder: string;
    disabled: boolean
}

export interface ResultApiType {
    data: any
    error: ErrMessages[]
    status: 'success' | 'error' | ''
}

export interface ErrMessages {
    field: string
    message: string
}

export interface Input {
    type?: string
    modelValue: any
    label?: string
    placeholder?: string
    id?: string
    disabled?: boolean
    mandatory?: boolean
    optional?: boolean
    isPassword?: boolean
    search?: boolean
    calender?: boolean
    close?: boolean
    classInput?: string
    row?: number
    error?: string
}

export interface SelectBox {
    items: DetailsSelectBox[],
    modelValue: string,
    placeholder?: string,
    label?: string,
    typeInput: string,
    mandatory: boolean,
    loading?: boolean,
    styleInput?: string,
    disabled: boolean,
}

interface DetailsSelectBox {
    ID: number | string,
    name: string,

}

export interface ToastMsgProps {
    type: 'success' | 'error' | undefined
    msg: string
    status: boolean
}

export interface ToastAction {
    message: string
    time?: number
}

export interface Status {
    status: DetailsStatus
}

export type DetailsStatus = 'todo' | 'inProgress' | 'pending' | 'accepted' | 'rejected' | 'resubmitted';


export interface TypeFnTooltip {
    id: any
    text: string,
    styleTooltip?: string
}

export interface InfoProfile {
    ID?: number | string
    name: string,
    family: string
    image?: string
    created?: number
}

export interface Rating {
    modelValue: number,
    disabled: boolean
}
export interface EmptyList {
    text: string
    styleContainer?: string
    icon: string
}

export interface DataTitle {
    title: string
    icon?: string
    type: "back" | "icon"
}

export interface DefaultPrice {
    amount: number
    discountPercentage?: number
    discount?: number
}


export interface Breadcrumbs {
    crumbs: DetailsCrumbs[]
}

interface DetailsCrumbs {
    to: string
    label: string
}

export interface Logo {
    customClass?: string
}

export interface CheckBox {
    name: string
    value: string
    modelValue: string
    label: string
}


export interface ReadMore {
    fullText: string
    maxWords: number
    title?: string
    icon?: string
}

export interface StorageResourceType {
    SID: string
    extension: string
    fullSID: string
    fileName: string
    fileSize: number
    fileType: string
    width: number
    height: number
    duration: number
}

export interface RadioBtn {
    modelValue: string | number
    options: {
        label: string
        value: string | number
    }[]
    name: string
    label?: string
    mandatory?: boolean
    optional?: boolean
    disabled?: boolean
    error?: string
    vertical?: boolean
}

export interface Pagination {
    loading: boolean
    page: number
    hasNextPage: boolean
}

export interface DetailsCategory {
    ID: number
    title: string
    slug: string
    description: string
    metaTitle: string
    metaDescription: string
    metaKeyword: string
    photoSID: StorageResourceType
}


export interface DataFaqState {
    dataModel: DataModelFaq
    type: EntityType
    tableID: number
    listFaq: DetailsFaqList[]
    isFetch:boolean
    loading:boolean
}
export interface DataModelFaq {
    relatedTo: EntityType
    relatedID: number
}

export interface DetailsFaqList {
    ID: number
    answer: string
    question: string
}

export interface DataPrepare {
    type: EntityType
    ID: number
}

export interface popup {
    title?: string
    subtitle?: string
    showPopupEdit?: boolean
    showPopupRemove?: boolean
    showPopupAdd?: boolean
    showPopup?: boolean
    stylePopup?: string
}

export interface RelatedPostDataModel {
    slug: string
    page?: number
    itemPerPage?: string
}

export interface Basemodal {
  title: string;        
  status: boolean;      
  subtitle?: string;
  titleClass?: string;
  subtitleClass?: string;
}


export interface titleSite {
    title: string | undefined
    icon?: string
}