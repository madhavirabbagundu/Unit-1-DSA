function anagram(str,str1){
var out = ""
// console.log(str1,str)
if(str.length !== str1.length){
    return false;
}
str = str.trim().split("").sort()
str1 = str1.trim().split("").sort()
for(var i = 0; i < str.length; i++){
    if(str[i] !== str1[i]){
        
        console.log(str[i],str1[i],str,str1)
        //   out = "true"
        //   console.log(true)
          return false
    }
    
}
return true;
}
console.log(anagram("eatr","atet"))