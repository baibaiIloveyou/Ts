let aaa:unknown = '123'
//unknown 也是一个任意类型
//和any的区别是 设置类型以后不可以随便调用
//必须进行类型确认 类型缩小以后才可以去使用上面的方法
if(typeof aaa === "string"){
  console.log(aaa.length)
}
