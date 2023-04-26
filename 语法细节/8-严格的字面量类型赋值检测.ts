interface Person{
  name:string
  age:number
}


const p:Person = {
  name:'why',
  age:18
}
//当第一次创建对象字面量的时候,称之为新鲜的
//对于新鲜的字面量,会进行严格的类型检测,必须满足类型的要求
//当类型断言或者对象字面量的类型扩大的时候 这种新鲜感会消失
function printPerson(person:Person){

}
const obj = {name:'kobe',age:18,height:1.9889}
printPerson(obj)
