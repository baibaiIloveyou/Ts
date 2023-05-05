type toArray<T> = T extends any? T[] : never

type NumArray = toArray<number|string>
//如果想让类型 推断出来是 number[] string[] 这样的 而不是 <number|string>[]
//可以使用上面这样的
//这种是分发类型 通过范型传过去 它每次都会单独执行 一次 第一次生成  number extends any? T[] : never
//第二次生成 string extends any? T[] : never
//所以这种就是分发类型
