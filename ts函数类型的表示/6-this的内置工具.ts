//默认的this是any类型
//noImplicitThis 必须为ture ts.json
//this在上下文不能正确推导的情况下必须明确的指定
//作为第一个参数 名字必须加this
//后续传入的参数从第二个开始 编译的代码 this会被抹除
function foo(this:{name:string},info:{name:string}){
  console.log(this,info)
}

type FooType = typeof foo //使用typeof直接拿到函数的类型


//获取FooType中的this的类型
type FooThisType = ThisParameterType<FooType>

//删除this参数类型 剩余其他参数
type PureFooType = OmitThisParameter<FooType>



//thisType:用于绑定一个上下文的this
interface IState{
  name:string
  age:number
}

interface IStore{
  state:IState
  eating:()=>void
}

const store:IStore & ThisType<IState> = {
  state:{
    name:'123',
    age:12,
  },
  eating:function(){
    console.log(this.name)
    //这样拿不到this的内容 所以要使用thisType来绑定一个上下文
  }
}

