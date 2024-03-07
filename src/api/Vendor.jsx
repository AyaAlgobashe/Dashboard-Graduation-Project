import { axiosInstance } from "./config"

export const getVenderList = () => {
    return axiosInstance.get('/users');
}


export const getVenderListDetails = (categoryId) => {
    return axiosInstance.get(`/users/${categoryId}`);
}