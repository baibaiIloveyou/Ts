import Request from './request/index'
import { BASE_URL, TIME_OUT } from './config'
const request = new Request({
  baseURL:BASE_URL,
  timeout:TIME_OUT
})


//如果有多个接口 想在这个请求拦截里面做些其他东西
//可以单独去添加拦截器
const request2 = new Request({
  baseURL:"http://codercba.com:1888/airbnb/api",
  timeout:8000,
  interceptors:{
    requestSuccessFn:(config)=>{
      return config
    },
    requestFailureFn:(err)=>{
      return err
    },
    responseSuccessFn:(res)=>{
      return res
    },
    responseFailureFn:(err)=>{
      return err
    }
  }
})

export  {request,request2}
