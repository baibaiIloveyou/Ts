interface ICollection{
  [index:string]:number
  length:number
  //表示可以通过索引访问 但是必须返回是number类型
}

function iteratorCollection(collection:ICollection){
  console.log(collection[0])
}

//iteratorCollection([1,2,3,4,5])

const names:[string,number] = ['123',123]//元组类型
iteratorCollection({name:1,age:2,length:1})
export {}
