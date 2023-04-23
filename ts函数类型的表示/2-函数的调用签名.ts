//一个函数可以进行函数调用 也可以变成对象像上面添加自己的属性
//调用前面 可以在interface里面定义多个就可以了
//如果是单纯表达函数的话
type Fn = (num1:number)=>number
interface fn {
  name:string
  (num1:number):number
}
const bar:fn = (num1:number):number=>{
  return 123
}
bar.name = '1'
