interface Ikun{
  name:string
  age:number
}

//把对象类型都变成可选的
//类型体操
type MyPartial<T> = {
  [P in keyof T]?: T[P]
}
type IKunOptional = Partial<Ikun>


//把对象类型都变成必选的
//类型体操
type MyRequired<T> = {
  [P in keyof T]-?: T[P]
}
type MYIkunOptional = Required<Ikun>

//把对象都变成只读的
//类型体操
type MyMyReadOnlyFn<T> = {
  readonly [p in keyof T] : T[p]
}
type MyReadOnly = Readonly<Ikun>


//传入的必须满足 key value其中的内容
//体操类型
//keys必须明确判断是可以写入的类型
type res = keyof any //keyof any === string | number | symbol
type MyRecoed<keys extends keyof any,T> = {
  [P in keys] : T
}

type t1 = "上海" | "北京" | "深圳"
type MyIKun = Record<t1, Ikun>
const IKuns: MyIKun = {
  "上海":{
    name:'why',
    age:18
  },
  "北京":{
    name:'why',
    age:18
  },
  "深圳":{
    name:'why',
    age:18
  }
}




export {}
