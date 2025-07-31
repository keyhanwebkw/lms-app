import type { ChildListState } from "~/types/child";
import { GET_CHILD_LIST } from "~/services/api/managementChild";

export const ChildList = defineStore('ChildList', {
    state: () => <ChildListState>({
        list: [],
        loading: true
    }),
    actions: {
        async getChildList() {
            this.loading = true
            const { data } = await GET_CHILD_LIST()
            this.list = data ? data.children : []
            this.loading = false
        }
    }
})