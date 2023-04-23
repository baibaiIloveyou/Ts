type fnType = (num1:number)=>number //这是表示函数类型 ()里面的形参不能省略
let foo:fnType = (agr:number):number=>{
  return 123
}

//函数对于传递的函数 参数是不进行校验的
//foo(function(num1){
// return num1
//})
