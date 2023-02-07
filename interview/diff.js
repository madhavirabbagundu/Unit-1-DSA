function diff(arr){
var i = 0;
var k = 5
var j = arr.length-1
while(i < arr.length && j >=0 ){
    if(arr[j] - arr[i] === k){
        console.log(arr[j] ,arr[i])
        i++
        j++
    }
    if(arr[j] - arr[i] > k){
        i++
    }
    if(arr[j]-arr[i] < k){
        j++
    }
}
}
console.log(diff([4,7,9,10]))