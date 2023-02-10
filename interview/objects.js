function person (name,fullname,age){
    this.name = name,
    this.fullname = fullname,
    this.age = age
}
var data = new person("madhavi","Rabbagundu",21)
console.log(data.name)

function person (name,fullname,age){
    this.name = name,
    this.fullname = fullname,
    this.age = age
}
var data = new person("madhavi","Rabbagundu",21)
console.log(data.name)

//second
var person1 = new Object({
name:"madhvi",
age:21,
lastname:"rabbu"
})
console.log(person1.name)

//keys and values

var obj = {
    name:"masai",
    location:"bangalore",
    skills:true
}
const key = Object.keys(obj)
console.log(key)

///objects how many ways we can print
const title  = "before"
const course ={
    lecture:10,
    section:2,
    title:"swadha foundation",
    enroll:{
        introduction:"welcome to the swadha"
    },
    notes(){
   console.log("you are sucessfullyes enrolled")

    },
    // title:"change the titlte"

}
course.song="natunatu",
console.log(course.enroll.introduction)
console.log(course)

//Factory FUnction
function createCourse(){
    return{
    title:"swadha",
    enroll(){
        console.log("welcome to the madhavi")
    }
}
}
const obj1 = createCourse()
console.log(obj1.title)
obj1.enroll()

//constructor function

function coarse1(title){
   this.title = title,
    this.enroll=function(){
        console.log("this is the sucessful")
    }
}
const coarse2 = new coarse1('masai2')
coarse2.enroll();
delete coarse2.title;
console.log(coarse2)
