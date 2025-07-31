export interface DataTransactionHistory {
    dataList: DetailsTransactionHistory
    count: number
}

interface DetailsTransactionHistory {
    ID: number | string
    bankName: string
    price: number
    trackingCode: number
    created: number
}

export interface DataTranactionHistoryOnline {
    dataList: DetailsTransactionHistoryOnline
}

export interface DetailsTransactionHistoryOnline {
    ID: string | number
    amount: number
    created: number
    type: 'increment' | 'decrement'
}