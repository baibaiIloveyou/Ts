//鸭子类型:只关心属性和行为,不关心你是不是相对应的类型
//只看表面是否一致
class Person{
  constructor(public name:string,public age:number) {
  }
}

class Dog{
  constructor(public name:string,public age:number) {
  }
}

function printPerson(p:Person){
  console.log(p.name,p.age)
}

printPerson(new Person('jan',18))
printPerson(new Dog('ha',18))
export {}
