interface Ilength{
  length:number
}
function getLength<Type extends Ilength>(arg:Type):Type{
  return arg
}
//传入的参数必须有length属性
//如果一般直接传入接口那么只会进行是否有length判断 传入的参数类型已经丢失

getLength('abc')
getLength({length:3})
//可以使用类型约束 传入数据



//编写类型约束
//O自己推导的是info这个对象
//keyof 表示 继承info对象里面的每一个 相当于 K extends name | age | height
function getKeys<O,K extends keyof O>(obj:O,key:K){
  return obj[key]
}
const info = {
  name:'哈哈',
  age:18,
  height:199
}
getKeys(info,"name")
