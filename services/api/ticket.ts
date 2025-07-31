export async function GET_SUPPORT_DEPARTMENTS() {
    return await useApi({ url: '/support/departments' })
}
