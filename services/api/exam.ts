import type { AnswerModel } from "~/types/exam"

export async function GET_DETAILS_EXAM(examID: number) {
    return await useApi({
        url: '/exam/get', data: { examID }
    })
}

export async function POST_JOIN_EXAM(examID: number) {
    return await useApi({
        url: '/exam/join', data: { examID }
    })
}

export async function GET_QUESTION_EXAM(questionID: number) {
    return await useApi({
        url: '/exam/question', data: { questionID }
    })
}

export async function POST_ANSWER_EXAM(answerData: AnswerModel) {
    return await useApi({
        url: '/exam/answer', data: answerData
    })
}

export async function GET_RESULT_EXAM({ userAnswerID, examID }: { userAnswerID?: number, examID?: number }) {
    return await useApi({
        url: '/exam/result', data: { userAnswerID, examID }
    })
}