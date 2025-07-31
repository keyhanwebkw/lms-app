import { GET_DATA_BLOG, GET_RELATED_BLOG } from "~/services/api/blog"
import type { DataGetBlogState, DetailsGetBlog } from "~/types/blog"
import { useComments } from "~/stores/global/comment";
import type { RelatedPostDataModel } from "~/types/global";

export const DetailsBlog = defineStore('DetailsBlog', {
    state: () => <DataGetBlogState>({
        dataGet: {} as DetailsGetBlog,
        loading: true,
        pageNotFound: false,
        dataModelRelated: {} as RelatedPostDataModel,
        loadingRelated: true,
        listRelated: [],
        isFetch: false
    }),
    actions: {
        async getDataBlog(slug: string) {

            this.listRelated = []
            this.loading = true
            const { data, status } = await GET_DATA_BLOG(slug)
            if (status == 'success') {
                this.dataGet = data.article
                this.pageNotFound = false
            } else if (status == 'error' && data.errorCode == 1) {
                this.pageNotFound = true
            }
            this.loading = false
        },

        async getRelatedBlog(slug: string) {
            this.loadingRelated = true
            this.dataModelRelated = {
                slug: slug,
            }
            const { data, status } = await GET_RELATED_BLOG(this.dataModelRelated)
            if (status == "success") {
                this.listRelated = data.articles
            }
            this.isFetch = true
            this.loadingRelated = false
        }
    }
})