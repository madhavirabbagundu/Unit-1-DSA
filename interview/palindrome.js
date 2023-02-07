function palindrome(str){
var out = ""
    for(var i = str.length-1; i >= 0; i--){
        out+=str[i]
    }
    // console.log(out)
    if(out === str){
        return "palindrome"
    }
    else{
        return "not a palindrome"
    }
}
console.log(palindrome("malaylam"))


function palindrome1(str,str1){
    var out = ""
    if(str.length !== str1.length){
        return false;
    }
        // for(var i = str.length-1; i >= 0; i--){
        //     out+=str[i]
        // }
        // console.log(out)
        if(str1 === str){
            return true
        }
        else{
            return false;
        }
    }
    console.log(palindrome1("mall","mala"))