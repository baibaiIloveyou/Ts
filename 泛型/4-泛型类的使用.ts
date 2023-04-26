class Person<Type>{
  x:Type
  y:Type
  constructor(x:Type,y:Type) {
  }
}

const P1 = new Person(1,2)
console.log(P1.x,P1.y)
const P2 = new Person("1","2")
console.log(P2.x,P2.y)

const p3 = new Person<number>(1,2)
