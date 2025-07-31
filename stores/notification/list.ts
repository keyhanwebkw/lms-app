import { GET_LIST_NOTIFICATION, POST_READ_NOTIFICATION } from "~/services/api/notification";
import type { DataNotificationListState } from "~/types/notification";

export const DataNotificationList = defineStore('DataNotificationList', {
    state: () => <DataNotificationListState>({
        listNotification: {},
        loading: true,
        pagination: {
            hasNextPage: false,
            loading: false,
            page: 1,
        },
    }),
    actions: {

        loadNextPage() {
            if (!this.pagination.loading && this.pagination.hasNextPage) {
                console.log('jwrgpjwrpgj')
                const nextPage = this.pagination.page + 1
                this.handleListNotification(nextPage)
            }
        },

        async handleListNotification(page: number = 1) {
            console.log(page)
            if (page === 1) {
                this.loading = true
            }
            const { data } = await GET_LIST_NOTIFICATION(page)
            if (data.notifications.length > 0) {
                if (page === 1) {
                    this.listNotification = data.notifications
                } else {
                    this.listNotification.push(...data.notifications)
                }
            } else {
                this.listNotification = []
            }

            this.pagination.hasNextPage = data.hasNextPage || false
            this.loading = false
            this.pagination.loading = false
            this.pagination.page = page
        },

        async handleReadNotif(ID: number) {
            const data = await POST_READ_NOTIFICATION(ID)
        }
    }
})