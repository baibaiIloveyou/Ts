function get(arg:string | any[]){
    console.log(arg.length)
}
get("123")
get([123,123,123])


function set(arg:{length:number}){
    console.log(arg.length)
}

set("aaa")
set({
    length:1
})
set(['1',2,3])