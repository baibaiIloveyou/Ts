interface IKun<Type = string>{
  name:Type
  age:number
  height:Type
}
//如果不传入泛型的话 可以传入一个默认值

const KUU:IKun<string> = {
  name:'坤',
  age:18,
  height:'1.88'
}

const KUU1:IKun<number> = {
  name:123,
  age:18,
  height:1.88
}
