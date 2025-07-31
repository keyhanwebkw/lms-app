export async function GET_LIST_NOTIFICATION(page: number) {

    let data = {
        page: page
    }

    return await useApi({ url: '/notification/list', data: data })

}

export async function POST_READ_NOTIFICATION(ID: number) {

    let data = {
        IDs: [ID]
    }
    return await useApi({ url: '/notification/read', data })

}
