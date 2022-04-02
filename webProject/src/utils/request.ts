import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { Toast } from '@/utils'
let Service: AxiosInstance = axios.create({
  baseURL: '',
  timeout: 5000,
})

Service.interceptors.response.use((res: AxiosResponse) => {
  const { status = 0, data: { message = '' } = {} } = res;
  if (status !== 200) {
    return res;
  }
  Toast.error(message);
}, () => {})
Service.interceptors.request.use((config: AxiosRequestConfig) => {
  
}, (err: AxiosError) => { })
export default Service;
