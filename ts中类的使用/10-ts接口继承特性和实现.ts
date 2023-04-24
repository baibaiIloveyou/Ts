interface Ikun{
  name:string
  age:number
  play:()=>void
}

interface Son extends Ikun{
  height:number
}

interface Father{
  bar:()=>void
}

const p:Son = {
  name:'why',
  age:18,
  height:1.88,
  play:()=>{}
}
//一般用于如果使用了第三方库 想在上面加上自己的东西 可以使用继承

class Person implements Son,Father{//类实现接口
  //可以继承多个接口
  name:string
  age:number
  height:number
  play(){

  }
  bar(){

  }
}
const p1 = new Person()
