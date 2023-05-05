//这里是要对不同的接口进行单一的拦截请求 因为axios声明里面没有interceptors 所以要单独进行继承添加
import type { AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig } from 'axios'

interface  InterceptorsFn<T = AxiosResponse> {
  requestSuccessFn?: (config:InternalAxiosRequestConfig) => InternalAxiosRequestConfig
  requestFailureFn?: (err:any) => any
  responseSuccessFn?: (res:T) => T
  responseFailureFn?: (err:any) => any
}
export interface RequestConfig<T = AxiosResponse> extends AxiosRequestConfig{
  interceptors?: InterceptorsFn<T>
}
