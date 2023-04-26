enum Direction{
  UP,
  DOWN,
  LEFT,
  RIGHT
}//枚举类型 所有可能出现的类型 列举出来
function turnDirection(direction:Direction){
  switch (direction) {
    case Direction.DOWN: //这样拿值
      console.log('像下移动')
  }
}
turnDirection(Direction.DOWN)


//枚举类型设置值
enum Up{
  x = '10080',
  y = '10909'
}
const Down:Up = Up.x

enum Operation{
  Read = 1<<0//位运算
}
