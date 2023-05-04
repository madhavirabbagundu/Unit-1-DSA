function middle(arr){
arr = arr.sort()
if(arr.length%2!==0){
var data = Math.floor(arr.length/2)
console.log(arr[data])
}
if(arr.length%2===0){
    var n = arr.length/2
    var m = (arr[n]+arr[n-1])/2;
    console.log(m)

}
console.log(arr)

}
console.log(middle([3,5,8,6]))