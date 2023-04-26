//继承是多态的前提
//定义抽象方法
//抽象类不能被实例化
//同样的方法 根据不同的形态进行表示 就是多态
abstract class Shape{
  //将方法定义为抽象方法
  abstract getArea()//只有声明 没有实现体 因为每种执行方式都不一样 所以让子类自己进行实现
  //子类必须实现这个抽象方法
}

class Circle extends Shape{//圆形
  constructor(public radius:number) {
    super()
  }
  getArea(){
    return this.radius ** 2 * Math.PI
  }
}

class Rectangle extends Shape{//矩形
  constructor(public width:number,public height:number) {
    super()
  }
  getArea(){
    return this.width * this.height
  }
}

function CalcArea(shape:Shape){//定义一个通用的接口
  //传入可以获得面积
  //这里的传入的类型防止传入的类型是错误的
  //所以要进行类型校验 如果写联合类型的话 每次有新的都要进行添加
  //所以创建一个通用类 让所以的类都继承这个
  return shape.getArea()
}
CalcArea(new Circle(3))
CalcArea(new Rectangle(1,3))

//抽象类只能被单一的继承
//接口可以实现多层的实现
