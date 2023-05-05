//.d文件可以编写类型的声明
//如果又一个库没有类型的声明 那么可以在这个文件里面编写
//只写声明 不写实现

//编写自己的声明
//如果在html里面编写
//在其他文件获取 ts文件会报错 所以要编写自己的声明让ts知道是有这个声明的
declare const name:string
declare const age:number

//声明一个模块
declare module "lodash" {
  export function join(arg:any[]):any
}

//声明文件模块
declare module "*.png"

//cdn引入的东西如何声明
declare namespace $ {
  export function ajax(setting:any):any
}
