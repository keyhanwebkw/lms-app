import type { CoursesListState } from "~/types/course"
import { GET_COURSES_LIST } from "~/services/api/course"

export const CoursesList = defineStore('CoursesList', {
    state: () => <CoursesListState>({
        list: [],
        loading: true,
        pagination: {
            hasNextPage: false,
            loading: false,
            page: 1,
        },
        dataModel: {
            name: '',
            categorySlug: '',
            page: NaN,
            sort: {},
        },
    }),
    actions: {

        loadNextPage() {
            if (!this.pagination.loading && this.pagination.hasNextPage) {
                this.pagination.page++
                this.getCoursesList({ page: this.pagination.page })
            }
        },

        searchCourses(name: string) {
            if (name.length > 2) {
                this.getCoursesList({ name: name, page: 1 })
                const route = useRoute()
                navigateTo(`${route.path}?search=${name}`)
            }
        },

        clearSearch() {
            this.dataModel.name = ''
            this.getCoursesList({ page: 1 })
            const route = useRoute()
            navigateTo(`${route.path}`)
        },

        async getCoursesList(params?: Partial<CoursesListState["dataModel"]>) {
            const { page = 1 } = params || this.dataModel

            if (page === 1) {
                this.loading = true
            } else {
                this.pagination.loading = true
            }

            if (params) {
                this.dataModel = { ...this.dataModel, ...params }
            }

            const { data } = await GET_COURSES_LIST(this.dataModel)

            if (data && data.courses) {
                if (page === 1) {
                    this.list = data.courses
                } else {
                    this.list.push(...data.courses)
                }
            }

            this.pagination.hasNextPage = data.hasNextPage || false
            this.loading = false
            this.pagination.loading = false
        },

        async resetCoursesList() {
            this.list = []
            this.dataModel = {
                name: '',
                categorySlug: '',
                page: NaN,
                sort: {}
            }
        }
    }
})