export async function GET_CHILD_LIST() {
    return await useApi({ url: '/user/child/list' })
}

export async function POST_CREATE_CHILD(data: FormData) {
    return await useApi({ url: '/user/child/create', data: data })
}

export async function GET_INFO_CHILD(ID: number) {

    let data = {
        childID: ID
    }
    
    return await useApi({ url: '/user/child/get', data: data })
}