// var arr = [2,3,5,6,1]
var arr = [-2,1,2,4]
var k = 0
var i = 0;
var j = 1
var count = 0;
while(i < arr.length && j < arr.length){
    if(arr[j]-arr[i] === k){
        count++
        console.log(arr[j],arr[i])
        
        i++
        j++
    }
    if(arr[j]-arr[i]>k){
        i++
    }
    if(arr[j] - arr[i] < k){
        j++
    }
}
console.log(count)

//evennumber

var a = [3,11,4,200]


for(var i = 0; i <= 10; i++){

}
// console.log(i)
// console.log(false == 0)
// console.log(null == undefined)
// console.log(""==0)
// console.log([]===[])
// console.log({}==={})