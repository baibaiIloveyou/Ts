type CalcFnType = (num1:number,num2:string) => number
function foo(){
  return "abc"
}

//获取函数的返回值类型:内置工具
type CalcReturnType = ReturnType<CalcFnType>

//类型体操:手写returnType函数 获取函数返回值类型
//infer 推断类型
//先判断是不是函数类型 然后使用infer推导出来
type MyReturnType <T extends (...args:any[]) => any> = T extends (...args:any[])=> infer R ? R : never
type FooReturnType = MyReturnType<typeof foo>

//推断参数的类型
type MyReturnArgsType<T extends (...args:any[]) => any > = T extends (...args: infer A) => any ? A : never
