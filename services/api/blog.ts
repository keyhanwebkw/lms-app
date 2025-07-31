import { filterInvalidData } from "~/func/filterInvalidData"
import type { ModelFilterBlog } from "~/types/blog"
import type { RelatedPostDataModel } from "~/types/global"

export async function GET_BLOG_LIST(dataModel: ModelFilterBlog) {
    let data = filterInvalidData(dataModel)
    return await useApi({ url: '/article/list', data: data })
}

export async function GET_BLOG_CATEGORY_LIST(categorySlug?: string) {
    return await useApi({ url: '/article/category/list', data: { categorySlug } })
}

export async function GET_DATA_BLOG(slug: string) {

    const data = {
        slug: slug
    }

    return await useApi({ url: '/article/get', data: data })
}

export async function GET_RELATED_BLOG(dataModel:RelatedPostDataModel) {

    let data = {
        slug: dataModel.slug,
        page: dataModel.page,
        itemPerPage: dataModel.itemPerPage
    }

    return await useApi({ url: '/article/related', data: data })
}
