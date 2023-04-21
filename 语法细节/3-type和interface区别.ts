type Ikun = {
  name:string
  age:number
}
//type 可以声明多种类型 联合类型 对象都可以 但是只能声明一个



//interface只能声明对象 但是可以声明多个一样的
interface person {
  name:string
  age:number
}
interface person{
  height:number
}

//interface 可以实现继承
interface student extends person{
  class1:string
}

//一般对象类型可以直接用interface 其他类型的使用type

//155
