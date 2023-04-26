//定义一个函数 返回传入的内容
function demo<Type>(arg:Type):Type{
  return arg
}

demo<string>('string')
demo<number>(1)
demo<{name:number}>({name:132})
//如果这样传递的话 函数的参数ts很难定义
//可以通过泛型 传入这个类型
//通过<Type>去接受这个参数

//不过也可以不传入参数 可以让它自己去推导
