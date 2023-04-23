function bar (x:number,y?:number){

}
bar(1)
//可选参数 本质是一个联合类型 number | undefined

function foo(x:number,y:number = 100){

}
foo(1)
//这是一个默认参数




//剩余参数
function point(...arg:(string|number)[]){

}
point('1',1,3)

