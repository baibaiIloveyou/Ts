import { request2 } from '../index'
interface IData{
  data:any
}
request2.request<IData>({
  url:"/entire/list",
  params:{
    offset:0,
    size:20
  },
  interceptors:{//单次请求的拦截
    requestSuccessFn:(config)=>{
      return config
    },
    responseSuccessFn:(res)=>{
      return res
    }
  },
}).then(res=>{
  console.log(res)
})
