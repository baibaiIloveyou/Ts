let arr:[number,string,string] = [1,'why','cc']

//元组类型一般用在函数的返回值里面比较多
//和数组不一样 数组一般是一个数组里面的值都一样 string[]
function foo():[string,number,()=>void]{
  return ['1',2,()=>{}]
}
foo()
