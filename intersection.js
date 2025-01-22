var str = [4,5,7]
var str1 = [5,2,5]
var out = ""
for(var i = 0; i < str.length; i++){
    for(var j = 0; j< str1.length; j++){
        if(str[i]===str1[j]){
            out = str[i]
        }
    }
}
console.log(out)

//prime
var n = 1;
var count = 0;
// for(var i = 0; i <= n; i++){
    for(var j = 1; j <= n; j++){
       if(n%j===0){
            count++
        }
    }
// }
if(count === 2){
    console.log("yes")
}
else{
    console.log("no")
}