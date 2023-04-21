type direction = "left" | "right" | "up" | "down"

let move : direction = 'left'

//一般和联合类型一起使用 只能是这几个值

function Require(url:string,method:"GET"|"POST"){

}

const info = {
  url:'xxx',
  method:'GET'
} as const
// Require(info.url,info.method as "GET")
Require(info.url,info.method)
//可以使用类型断言as
//也可以将对象as成const const 推导出来是字面量类型
//这样是会报错的 因为它自动推导出来的只知道是个字符串类型 不知道里面的内容
