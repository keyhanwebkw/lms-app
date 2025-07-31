import type { CourseCategoryListState } from "~/types/course"
import { GET_COURSE_CAT_LIST } from "~/services/api/course"

export const CourseCategoryList = defineStore('CourseCategoryList', {
    state: () => <CourseCategoryListState>({
        list: [],
        loading: true
    }),
    actions: {
        async   getCourseCategoryList() {
            if (this.list.length > 0) return;   
            this.loading = true
            const { data } = await GET_COURSE_CAT_LIST()
            this.list = data ? data.categories : []
            this.loading = false
        }
    }
})