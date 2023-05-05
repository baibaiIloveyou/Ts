interface IKun{
  name:string
  age:number
  slogan?:string
}
//pick 传入2个 拿到所传入的类型
type IKUns = Pick<IKun, "age" | "name">
//体操类型
type MyPick<T,K extends keyof T> = {
  [P in K] : T[P]
}

//omit 排除掉传入的
//体操类型
type MyOmit<T,K extends keyof T> = {
  [P in keyof T as P extends K ? never : P] : T[P]
}
type MOmit = Omit<IKun, "age" | "name">


//Exclude 排除联合类型所传入的那个
type KUn = "sing" | "dance" | "rap"
//体操类型
type MyExclude<T,E> = T extends E ? never : T
type IKK = MyExclude<KUn,"rap">


//Extract 提取传入的那个类型
type NNa = "sing" | "dance" | "rap"
//体操类型
type MyExtract<T,E> = T extends E ? T : never
type MMa = Extract<NNa, "rap">


//NonNullable 排除掉null和undefined类型
type NNNa = "sing" | "dance" | "rap" | null
//类型体操
type MyNonNullable<T> = T extends null | undefined ? never : T
type MyNNNa = NonNullable<NNNa>


//instanceType

//ReturnType判断函数的返回值
//
export {}
