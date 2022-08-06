var arr = [2,3,5,6,1]
var k = 3
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
