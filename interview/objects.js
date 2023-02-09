function person (name,fullname,age){
    this.name = name,
    this.fullname = fullname,
    this.age = age
}
console.log(person("a","d",32).name)
var data = new person("madhavi","Rabbagundu",21)
console.log(data.name)

function person (name,fullname,age){
    this.name = name,
    this.fullname = fullname,
    this.age = age
}
console.log(person("a","d",32).name)
var data = new person("madhavi","Rabbagundu",21)
console.log(data.name)

//second
var person1 = new Object({
name:"madhvi",
age:21,
lastname:"rabbu"
})
console.log(person1.name)
