// In javascript there are three scopes are there those are:
// 1. Functional scope 
// 2. Block Scope
//3. globla scope
// 
// In functional scope suppose we are given any variabl in between the function in that case we can 
//  console in that function only other wise it will get a error

// Block scope means also same as the functional scope because the block scope means in between the block it will work otheriwiaw it don't work

//  globlal csope means it means that we can declare variable it will prinit like we can decare in between a functin or uotside of a functiona it will work.

// functional scope
function first(){
    let name = "madhavi"
    console.log(name)

}
// console.log(name) // this will get the error because this is a local variable but a global variable

first()


 // black scope

 {
    let name1 = "masai"
    const age = 20
    var school = "ssbn"
    console.log(name1,age,school)
 }
 console.log(school)
//  console.log(age)  this is a block scope that why we are seeing the error like age is not defined becuase this a block scope
// here name1 and age is not work.

// global variable


const data = "my fate is not good now a days i am thinking please help me god"
function second(){
    console.log(data)
}
second()
// the main difference between between the var let and const

// the var is used in between the blocks and fiunctions and outside of a function
// let is a global scope but this a block scope because when we declare variable in b/w the block scope it will work in between otherwise it won't then suppose we can update the let variable it will work 
// const is also  a local and global scope but const is a block scope it is also same as let but one main thing is we are not able to update the const variable with same variable it will get the syntax srror.

//  for example

function scope(){
    var a = 30
    let b = 2
    const c = 4
    a = 3
    b = 5
    c = 2
    console.log(a,b,c)
}
scope()
