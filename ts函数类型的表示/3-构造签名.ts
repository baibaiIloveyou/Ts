class Person{

}

interface ICTOR{
  new () : Person
}

function factor(fn:ICTOR){
  return new fn();
}
factor(Person)

//构造签名一般用于构造函数 传入的函数要进行new 操作
