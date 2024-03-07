import { axiosInstance } from "./config"

export const getServiceList = () => {
    return axiosInstance.get('/products');
}
export const getServiceListDetails = (categoryId) => {
    return axiosInstance.get(`/products/${categoryId}`);
}
