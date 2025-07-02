import { AxiosResponse } from "axios";
import axiosClient from "./axiosClient";


const getData = <T>(response: AxiosResponse<T>) => response.data;

const api = {
    get: <T>(url: string) => axiosClient.get<T>(url).then(getData),
    post: <T>(url: string, body: any, config?: object) => axiosClient.post<T>(url, body, config).then(getData),
    put: <T>(url: string, body: any) => axiosClient.put<T>(url, body).then(getData),
    delete: <T>(url: string) => axiosClient.delete<T>(url).then(getData),
};

export default api; 