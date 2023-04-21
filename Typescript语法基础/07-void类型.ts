//void表示一个函数没有返回值
//这个void可以让函数返回一个undefined
function sum(num1:number,num2:number):void{
  console.log(num1+num2)
}
sum(1,2)

//也可以用来表示是一个函数类型
type FnType = () => void//这样就表示是一个函数类型
let fn:FnType = ()=>{}


//例子(用来表示是一个函数类型)
//...agr:any[]表示接受参数 因为...是剩余参数 所以是个数组类型
function delayExecFn(fn:(...arg:any[])=>void){
  setTimeout(()=>{
    fn('why',13)
  },3000)
}
delayExecFn((name,age)=>{
  console.log(name)
  console.log(age)
})

//基于上下文推导出来的void是可以返回东西的
let names = ['abc','acv'] //推导出来的可以返回东西
names.forEach((item,index,arr)=>{
  console.log(item)
  return '123'
})
export {}
