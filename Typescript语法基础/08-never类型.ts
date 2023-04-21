function foo():never{
  //永远不会返回东西
  //一般才用never表示
  throw new Error('1323')
}
foo()
