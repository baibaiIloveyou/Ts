//将ts变成一个模块
//添加 export{}就会被认为是一个独立的模块

import type {Person} from "./utils/math"
const id1:Person = {name:'ooo',age:19}
//一般通过这样导入
//在导入的时候前面最好加个type这个可以让编译器识别出来是类型
//在编译的时候可以安全的移除 提高编译速度
