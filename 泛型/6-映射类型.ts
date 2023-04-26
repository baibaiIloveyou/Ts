//映射类型 将类型拷贝出来
//映射类型的作用:
//可以在映射的过程中添加东西
//可以将类型添加为可选的或者为只读的
//还可以添加修饰符的符号
type NewMapPerson<Type> = {
  [key in keyof Type] : Type[key]
  //readonly [type in keyof Type] : Type[type]
  //[type in keyof Type] ?: Type[type]
  //[type in keyof Type] -?: Type[type] 这个减号的意思表示去除掉可选参数 比如在原始类型里面有可选类型 不想要了 可以在映射的时候使用符号去除掉
  //-readonly[type in keyof Type] ?: Type[type] 同上意思可以去除
}

interface Person{
  name:string
  age:number
  height?:number
  readonly address:string
}

type NewPerson = NewMapPerson<Person>
//映射类型就是将需要拷贝的这个接口 通过泛型的方式传入 拷贝type里面
//通过in 去遍历里面的类型 然后拷贝
//in是遍历对象 keyof === name | age 联合类型


