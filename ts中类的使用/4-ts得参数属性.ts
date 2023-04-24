class Person{
  constructor(public name:string,private age:number,height:number) {
    //this.name = name 参数语法糖 不用在这样写了
  }
  running(){
    console.log(this.name)
  }
}
const p1 = new Person('why',10,1.88)

//语法糖 直接可以在参数里面写
