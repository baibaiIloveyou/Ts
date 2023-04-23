function add(agr:number,arg1:number):number
function add(agr:string,arg1:string):string

function add(agr:any,arg1:any):any {
  return agr + arg1
}


add(1,3)
add("1","2")
//函数的重载
//最后是一个通用函数 不可进行调用的
// add("1",1)

//先编写重载签名
//在进行编写通用函数


//编写一个重载函数可以获取参数的length
function foo(num:string):string
function foo(num:any[]):number

function foo(num:any){
  return num.length
}
foo("123")
foo([1,2,3,4,])

//可以使用联合类型进行实现
function bar(num:string | any[]):number{
  return num.length
}
bar([1,2,"2"])
//一般来说可以使用联合类型实现的就不要函数重载进行实现
