import { GET_SUPPORT_DEPARTMENTS } from "~/services/api/ticket";

import type { NewTicketRequestState } from "~/types/support";

export const AddNewTicket = defineStore('AddNewTicket', {
    state: () =>
        <NewTicketRequestState>{
            dataModel: {
                departmentID: '',
                message: '',
                title: ''
            },
            departments: {
                list: [{}],
                loading: false
            },
            loading: false,
        },
    actions: {
        async clearDataModel() {
            this.dataModel.departmentID = ''
            this.dataModel.title = ''
            this.dataModel.message = ''
        },

        async getDataDepartments() {
            this.departments.loading = true

            const { data, status } = await GET_SUPPORT_DEPARTMENTS()
            this.departments.list = status == 'success' ? data.departments : []

            this.departments.loading = false
        },

        async sendNewTicket() {

        }
    },
});
