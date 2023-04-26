interface ICollection{
  [index:string]:number//这里不可写联合类型 如果写为any可以 因为类型检测的时候 [0] 会被当成["0"]去检测
  length:number
  //表示可以通过索引访问 但是必须返回是number类型
}

function iteratorCollection(collection:ICollection){
  console.log(collection[0])
}

//iteratorCollection([1,2,3,4,5])

const names:[string,number] = ['123',123]//元组类型
iteratorCollection({name:1,age:2,length:1})

//也不能用去除新鲜去赋值
//索引签名[index:string]:string会报错
//因为这样写可能会调用[].forEach 当这样的话就不是这样的类型了

//索引类型两个签名
//[0]可以当成number
//["0"]也会被当成字符串
interface IIndexType{
  [index:number]:string
  [key:string]:any
  //aaa:any
}
//数字类型必须是比字符串类型更加确定的类型
//如果索引签名中 有其他类型,其他类型返回的签名必须满足string类型返回的签名
const name:IIndexType = ["abc","cba","aaa"]
const item1 = name[0]
const ForEachFn = name["forEach"]
export {}
