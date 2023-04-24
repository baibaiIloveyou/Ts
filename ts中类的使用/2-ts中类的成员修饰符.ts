class Person{
    public name:string //一般加上public表示都是公有的哪里都可以访问到
    age:number
    readonly height:number//只读属性修饰符
    protected study :string //表示子类可以访问
  constructor(name:string,age:number) {
    this.name = name
    this.age = age
  }
  private eating(){//private表示私有的 只有内部可以访问到
   console.log(this)//子类也不可以访问
  }
}
const p1 = new Person("why",10)
