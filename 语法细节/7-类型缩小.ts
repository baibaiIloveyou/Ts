function foo(id:number | string){
  if(typeof id === "string"){
    console.log('123')
  }
}
//这是类型缩小 使用 typeof来判断


//这是平等缩小
type Direction = "left" | "right" | "up" | "down"
function switchDirection(direction:Direction){
  switch (direction) {
    case  "left" : console.log('左') ;break;
    case  "right" : console.log('右') ;break;
    case  "down" : console.log('下') ;break;
  }
}

//还有instandof
//还有in
//都用于类型缩小
