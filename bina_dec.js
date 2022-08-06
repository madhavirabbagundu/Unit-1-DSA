
//binary to number converting
var str = "0000000000011111"
var num = 0
var value = 1
var out = []
for(var i = str.length-1; i >= 0; i--){
    if(str[i]==="1"){
        num +=value
        value = value*2;
    }
    // out.push(num)
}
// console.log(num)

var str1 = "0000000000011111"
var data = parseInt(str1,2)
// console.log(data)
//prime number

var arr = [2,4,6,4,5]
for(var i = 0; i < arr.length; i++){
    var count = 0;

    for(var j = 2; j <= arr[i]; j++){
        if(arr[i]%j===0){
            count++
        }
    }
    // console.log(count,arr[i])
    if(count === 1){
        // console.log(arr[i])
    }
    
    

}
///anagram
var A = "abcd"
var B = "bacd"
var out = ""
var a = A.split("").sort()
var b = B.split("").sort()
// console.log(A,B,a,b)
function anangram(a,b){
for(var i =0 ; i < A.length; i++){
    if((a.length!==b.length) || (a[i]!==b[i])){
        // console.log(false)
        return false
    }
    
}
return true

}
console.log(anangram(a,b))

