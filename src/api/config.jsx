import axios from "axios";
export const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
    withCredentials: false,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
})
console.log(process.env.REACT_APP_BASE_URL)
