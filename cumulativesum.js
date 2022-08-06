//cumulative sum 
var Array= [1, 5, 1, 1, 1]
var sum = 0;
var out = []
var out1 = []
for(var i = 0; i < Array.length; i++){
    sum+=Array[i]
    out.push(sum)
    // sum-=Array[i]
    // console.log(sum)
   
    out1.push(sum)
}
// console.log(out)
var a = [1,-2,3,4,-6]
var sum1 = 0;
// console.log(out1)
for(var j = 0;j < a.length; j++){
    sum1+=a[j]
    // console.log(sum1)
}


//identical twins
var arr = [1,2,3,2,1]
// arr.sort()
var t = 2
var count = 0;
var out = []
for(var i = 0; i < arr.length; i++){
    for(var j = i+1; j< arr.length; j++){
        if(arr[i]===arr[j]){
            count++
            out.push([i,j])
        }
    }
}
console.log(out)


function first(){
    var name = "m"
    function second(){
        console.log(name)
    }
    second()
}
first()

function call(){
    console.log("madavi")
}
function sec(callback){
    call()
}
sec()
//sorting

var a = [2,1,5,8,3]
for(var i = 0; i < a.length; i++){
    for(var j = i+1; j< a.length; j++){
        if(a[i] > a[j]){
            var temp = a[j]
            a[j] = a[i]
            a[i] = temp
        }
    }
}
console.log(a)