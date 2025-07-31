import { filterInvalidData } from "~/func/filterInvalidData"
import type { ModelSendContentAssignment } from "~/types/assignment"

export async function GET_GENERALITIES_ASSIGNMENT(assignmentID: number) {
    let data = {
        assignmentID: assignmentID
    }
    return await useApi({
        url: '/assignment/get', data
    })
}

export async function GET_CONTENT_ASSIGNMENT(assignmentID: number) {
 
    return await useApi({
        url: '/assignment/receive', data: { assignmentID }
    })
}

export async function POST_CONTENT_ASSIGNMENT(formData: FormData) {

    let data = filterInvalidData(formData)

    return await useApi({
        url: '/assignment/send', data: data
    })
}
