function foo(num1:number,num2:number):number{
  return num1 + num2
}
const num = foo(2,3) //这样传递在参数可以确定类型

//如果要确定返回值的类型 就在()后面添加类型
//如果没有确定 那么可以自己推导

//歌词解析工具
type lyricsType = {
  time:number
  text:string
}
function parseLyric(lyric:string):lyricsType[]{
  const lyrics:lyricsType[] = []//这里要确定某种类型
  lyrics.push({time:1111,text:'去去去去去'})
  return lyrics
}
const lyric = parseLyric('12345')

for (const lyricsType of lyric) {
  console.log(lyricsType.time)
}

//匿名函数最好不要添加类型注解
//它会自动指定类型
const names:string[] = ['abc','abc']
names.forEach(function(item,index,arr){
  console.log(item)
})


//对象类型的参数
type PointType = {//type别名
  x:number
  y:number
  z?:number //?是可选类型 可以有可以没有
}
function point(point:PointType){
  console.log(point.x)
}
point({x:1,y:2})
export {}
