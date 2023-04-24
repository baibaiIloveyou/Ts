//1.类也可以当成一个构造函数的签名
//2.类本身可以当作这个实例的类型
//3.类可以创建对应的实例对象
class Person{

}
const p:Person = new Person()
function factory(ctor:new()=>void){

}
factory(Person)
