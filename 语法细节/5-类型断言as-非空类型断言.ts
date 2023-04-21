const myEL = document.querySelector('.img') as HTMLImageElement
//类型断言 可以断言成更具体的
//如果使用选择器 获取的是img这个标签 那么ts可以知道这个是个什么类型 从而使用上面的属性
//如果这个选择器获取的是class属性 那么ts不知道这个是什么类型 可以使用as断言成更具体的那个标签


//类型检测的断言 只能断言成更具体的内容
//一般可以断言成any不具体的内容
//在断言成具体的内容
let age:number = 18
let age2 = age as any
let age3 = age2 as string


//非空类型断言
//info.friend!.name = 'name'
//在属性的后面加上! 就是非空类型断言
//意思就是确定有值 可以跳过ts编译阶段
