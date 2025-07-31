import type { DetailsStatus } from "./global"

export interface DataCardOrder {
    orders: DetailsCardOrder
    products: DetailsProduct[]
}

interface DetailsCardOrder {
    ID: number | string
    status: DetailsStatus
    totalPrice: number
    created: number
    trackingCode: number
    items: DetailsItemProductOrder[]
}

export interface DetailsItemProductOrder {
    productID: number | string
    price: number
    quantity: number
}

export interface DetailsProduct {
    ID: number | string
    image: string
    name: string
    slug: string,
    discountPercentage:number
}