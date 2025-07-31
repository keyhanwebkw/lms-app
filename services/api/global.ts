import { filterInvalidData } from "~/func/filterInvalidData";
import type { ModelSendComment, ModelListComment } from "~/types/comment";
import type { DataModelFaq } from "~/types/global";

export async function POST_CONTENT_SEND_COMMENT(dataModel: ModelSendComment) {
    let data = filterInvalidData(dataModel)

    return await useApi({
        url: '/comment/send', data: data
    })
}

export async function GET_LIST_COMMENT(dataModel: ModelListComment) {
    let data = filterInvalidData(dataModel)

    return await useApi({
        url: '/comment/list', data: data
    })
}


export async function GET_LIST_FAQ(dataModel: DataModelFaq) {
    let data = filterInvalidData(dataModel)

    return await useApi({
        url: '/faq/list', data: data
    })
}



