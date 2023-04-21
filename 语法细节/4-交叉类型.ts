interface Ikun {
  name:string
}
interface Icoder{
  age:18,
  fn:()=>void
}

type Coder = Ikun & Icoder
//交叉类型 两种都满足
