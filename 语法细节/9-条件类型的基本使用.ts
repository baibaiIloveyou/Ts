interface Data{
  name:string
}
type ResType = boolean extends Data ? true : false

//函数重载
function sum<T extends number | string>(num1:T,num2:T):T extends number ? number : string
function sum(num1,num2){
  return num1+ num2
}
const res = sum(1,2)

export {}
