import axios from "axios";
import { ToastMsg } from "@/stores/global/toast";
import { getIndexedDB, removeItemIndexdDB } from "@/services/db/indexedb";

axios.defaults.baseURL = "/core/public/api";

interface TypeHttpRequest {
    url: string;
    data?: any;
    config?: any;
}

function handelCatchRes(err: any) {
    if (err.response.status == 401) {
        clearDataAndPushToLogin()
    }
    else if (err.response.status == 500 || err.response.status == 503) {
        ToastMsg().ToastErrMsg({ message: 'خطا در دریافت اطلاعات. لطفا مجدد تلاش کنید.' })
    }
}

const clearDataAndPushToLogin = () => {
    navigateTo('/auth/')
    removeItemIndexdDB('profile')
    removeItemIndexdDB('token')
}

export async function useApi({ url, data, config }: TypeHttpRequest) {
    try {
        const token = await getIndexedDB('token');
        axios.defaults.headers.common['Authorization'] = token ? `Bearer ${await getIndexedDB('token')}` : ''
        let dataReq = data ? data : {}
        const requestConfig = {
            ...config,
            dataReq
        };

        const response = await axios.post(url, dataReq);
        return response.data;
    } catch (err: any) {
        handelCatchRes(err);
        return err.response.data
    }
}