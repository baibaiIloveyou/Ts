class Person{
  //必须声明一下内部属性 不然会提示错误
  name:string
  age:number
   constructor(name:string,age:number) {
     this.name = name
     this.age = age
   }
}
const p1 = new Person("why",18)
export {}
