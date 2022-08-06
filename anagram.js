var str = "abcd"
var str2 = "bcadr"
function anagram(str,str2){
    // if(str.length!==str2.length)
    // {
    //     return false;
    // }
    str=str.split("").sort();
    str2=str2.split("").sort();
    for(var i = 0; i < str.length; i++){
        if(str.length!==str2.length || str[i]!==str2[i]){
        // if(str[i]!==str2[i]){
            return false;
        // }
    }
    }
    return true;
}

console.log(anagram(str,str2))