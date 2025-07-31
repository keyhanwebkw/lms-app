import { defineStore } from 'pinia'
import type { DataPrepare } from '~/types/global'
import type { DataFaqState, DataModelFaq, EntityType, ResultApiType } from '~/types/global'
import { ToastMsg } from './toast'
import { GET_LIST_FAQ } from '~/services/api/global';

export const useFaqs = defineStore('useFaqs', {
    state: () => <DataFaqState>({
        dataModel: {} as DataModelFaq,
        tableID: NaN,
        type: '' as EntityType,
        listFaq: [],
        isFetch: false,
        loading: false
    }),

    actions: {
        async handleclearData() {
            this.dataModel = {
                relatedID: NaN,
                relatedTo: null
            },
                this.isFetch = false
        },

        async prepareForFaq({ type, ID }: DataPrepare) {
            this.type = type
            this.tableID = ID
            this.getListFaq()
        },

        async getListFaq() {
            this.loading = true
            const toastMessage = ToastMsg()
            this.dataModel = {
                relatedTo: this.type,
                relatedID: this.tableID,
            }
            const { data, status, error }: ResultApiType = await GET_LIST_FAQ(this.dataModel)
            if (status == 'success') {
                this.listFaq = data.faqs
            } else if (status == 'error') {
                toastMessage.ToastErrMsg({ message: error[0].message })
            }
            this.isFetch = true
            this.loading = false
        },

    }
})