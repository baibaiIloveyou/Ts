import axios from 'axios'
import type {AxiosInstance,InternalAxiosRequestConfig} from 'axios'
import type { RequestConfig } from '../config/config'

class Request {
  instance: AxiosInstance;
  constructor(config: RequestConfig) {
    //创建axios实例
    this.instance = axios.create(config);

    //添加全局请求拦截器
    this.instance.interceptors.request.use(
      (config) => {
        return config; //全局请求成功拦截
      },
      (err) => {
        return err; //全局请求失败拦截器
      }
    );

    //添加全局响应拦截器
    this.instance.interceptors.response.use(
      (res) => {
        return res; //全局响应成功拦截器
      },
      (err) => {
        return err; //全局响应失败拦截器
      }
    );

    //针对特定的接口进行添加拦截器
    this.instance.interceptors.request.use(
      config.interceptors?.requestSuccessFn,
      config.interceptors?.requestFailureFn
    );
    this.instance.interceptors.response.use(
      config.interceptors?.responseSuccessFn,
      config.interceptors?.responseFailureFn
    );
  }
  //返回promise
  request<T = any>(config: RequestConfig<T>) {
    if (config.interceptors?.requestSuccessFn) {//单次数据拦截
      //这里需要自己调用拦截数据
      config = config.interceptors.requestSuccessFn(config as InternalAxiosRequestConfig) ;
    }
    return new Promise<T>((resolve, reject)=>{
      this.instance.request<any,T>(config).then(res=>{
        if(config.interceptors?.responseSuccessFn){
          res = config.interceptors?.responseSuccessFn(res)
        }
        resolve(res)
      }).catch(err=>{
        reject(err)
      })
    })
  }

  get<T=any>(config:RequestConfig<T>){
    return this.request({...config,method:"GET"})
  }

  post<T=any>(config:RequestConfig<T>){
    return this.request({...config,method:"POST"})
  }

  delete<T=any>(config:RequestConfig<T>){
    return this.request({...config,method:"POST"})
  }
}

export default Request
