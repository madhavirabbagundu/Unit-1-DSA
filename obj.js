var obj = {
    name:"madhavi",
    age:20
}
var obj1 = {
    name:"mouni",
    age:23
}

var object = obj
console.log(object===obj)
console.log(obj===obj1)

//deep
var res = Object.assign({},obj)
// res.name = "ramu"
// console.log(res)

var res = {...obj};
res.name = "madhavi"
res.age = 20;
console.log(res)
console.log(obj === res)
