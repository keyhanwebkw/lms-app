export interface DataCardCart {
    dataOrderCart: DetailsCardCart
    dataTeacher: DetailsDataTeacher[]
}

interface DetailsCardCart {
    ID: number | string
    image: string
    teacherID: number | string
    name: string
    discountPercentage: number
    amount: number
    discount: number
    percentageUser: string
}

export interface DetailsDataTeacher {
    ID: string | number
    name: string
    family: string
}

export interface DataFactor {
    basePrice: number
    discountAmount: number
    totalAmount:number
}

export interface DataFactorFixed {
    totalAmount: number
}

export interface DataStepDiagram {
    dataList: DetailsDiagram[]
    currentIndex:any
}

export interface DetailsDiagram {
    label:string
    route:string
    requiresCompletion:boolean
}
