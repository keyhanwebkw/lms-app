import type { BlogListState, DetailsCategoryBlog } from "~/types/blog"
import { GET_BLOG_CATEGORY_LIST, GET_BLOG_LIST } from "~/services/api/blog"

export const BlogList = defineStore('BlogList', {
    state: () => <BlogListState>({
        list: [],
        loading: true,
        pagination: {
            hasNextPage: false,
            loading: false,
            page: 1,
        },
        dataModel: {
            title: '',
            categorySlug: '',
            page: NaN,
        },
        category: {
            details: {} as DetailsCategoryBlog,
            list: [],
            loading: true
        }
    }),
    actions: {

        loadNextPage() {
            if (!this.pagination.loading && this.pagination.hasNextPage) {
                const nextPage = this.pagination.page + 1
                this.getBlogList({ page: nextPage })
            }
        },

        searchBlog(name: string) {
            if (name.length > 2) {
                this.getBlogList({ title: name, page: 1 })
                const route = useRoute()
                navigateTo(`${route.path}?search=${name}`)
            }
        },

        clearSearch() {
            this.dataModel.title = ''
            this.getBlogList({ page: 1 })
            const route = useRoute()
            navigateTo(`${route.path}`)
        },

        async getBlogList(params?: Partial<BlogListState["dataModel"]>) {
            const { page = 1 } = params || this.dataModel

            if (page === 1) {
                this.loading = true
            } else {
                this.pagination.loading = true
            }

            if (params) {
                this.dataModel = { ...this.dataModel, ...params }
            }

            // get list blog
            const { data } = await GET_BLOG_LIST(this.dataModel)
            
            // get details category
            if (this.dataModel.categorySlug) {
                const { data } = await GET_BLOG_CATEGORY_LIST(this.dataModel.categorySlug)
                this.category.details = data.categories[0] || {}
            }

            if (data && data.articles) {
                if (page === 1) {
                    this.list = data.articles
                } else {
                    this.list.push(...data.articles)
                }
            }
            this.pagination.hasNextPage = data.hasNextPage || false
            this.loading = false
            this.pagination.loading = false
            this.pagination.page = page
        },

        async resetBlogList() {
            this.list = []
            this.dataModel = {
                title: '',
                categorySlug: '',
                page: 1,
            }
        },

        async getBlogCategoryList() {
            if (this.category.list.length > 0) return;
            this.category.loading = true
            const { data } = await GET_BLOG_CATEGORY_LIST()
            this.category.list = data.categories
            this.category.loading = false
        }
    }
})