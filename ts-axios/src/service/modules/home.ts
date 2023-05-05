import {request} from '../index'

request.request({
  url:"/home/multidata"
}).then(res=>{
  console.log(res)
})
