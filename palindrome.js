// var str = "malfgsdjkfalam"
// console.log(str)
var out = ""
function palindrome(str,str1){
    for(var  i = 0; i<str.length; i++){
     if(str[i]===str1[i]){
        return true;
     }
}
return false;
}
console.log(palindrome("abcd","abcd"))


var str = "taat"
// var str1 = "abcd"
function one(str){
    var  i = 0;
var j = str.length-1;
while(i <= j){
    if(str[i]!==str[j])
        return false
    i++;
    j--
}
return true;
}
// console.log(one("taat"))


for(var i = str.length-1; i>=0; i--){
    out+=str[i]
}
console.log(out)
if(out === str){
    console.log("yes")
}
else{
    console.log("no")
}
