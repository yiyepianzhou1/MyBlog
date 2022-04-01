import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
let Service: AxiosInstance = axios.create({
  baseURL: '',
  timeout: 5000,
})

Service.interceptors.response.use((res: AxiosResponse) => {
  const { status = 0 } = res;
  if (status !== 200) {
    return res;
  }
}, () => {})
Service.interceptors.request.use((config: AxiosRequestConfig) => {

}, (err: AxiosError) => { })
export default Service;
