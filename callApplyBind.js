var obj1 = {
    name:"a",
    sal:200
}
var obj2 = {
    name:"ram",
    sal : 3000
}
function main(bonus){
    this.sal = this.sal+bonus
    console.log(`${this.name} salary is ${this.sal}`)
}
// main.call(obj1,300)
// main.apply(obj1,[6000])
var res = main.bind(obj1)
        res(9000)