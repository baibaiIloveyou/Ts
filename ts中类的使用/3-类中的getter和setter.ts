class Person{
  private _name :string
  _age:number
  constructor(name:string,age:number) {
      this._name = name
      this._age = age
  }
  set name(newValue:string){
    this._name = newValue
  }
  set age(newValue:number){
    if(newValue>=0){
      this._age = newValue
    }
  }
}
const p1 = new Person('why',18)
p1.name = 'liu'
