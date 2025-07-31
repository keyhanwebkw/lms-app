import { filterInvalidData } from "~/func/filterInvalidData"
import type { ModelFilterCourse } from "~/types/course"
import type { RelatedPostDataModel } from "~/types/global"

export async function GET_COURSE_CAT_LIST() {
    return await useApi({ url: '/course/category/list' })
}

export async function GET_COURSES_LIST(dataModel: ModelFilterCourse) {
    let data = filterInvalidData(dataModel)
    return await useApi({
        url: '/course/list', data: data
    })
}


export async function GET_DETAILS_COURSE(slug: string) {
    let data = {
        slug: slug
    }
    return await useApi({
        url: '/course/get', data: data
    })
}

export async function GET_EPISODE_SECTION(ID: number) {
    let data = {
        courseSectionID: ID
    }
    return await useApi({
        url: '/course/episode/get', data
    })
}


export async function GET_RELATED_COURSE(dataModel: RelatedPostDataModel) {
    let data = {
        slug: dataModel.slug,
        page: dataModel.page,
        itemPerPage: dataModel.itemPerPage
    }
    return await useApi({
        url: '/course/related', data
    })
}

export async function GET_CONTENT_EPISODE_COURSE(episodeContentID: number) {

    let data = {
        episodeContentID: episodeContentID
    }
    return await useApi({
        url: '/course/episode/content', data
    })
}




