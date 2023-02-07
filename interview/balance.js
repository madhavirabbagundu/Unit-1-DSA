function balance(str){
var stk = [str[0]]
for(var i = 1; i < str.length; i++){
    if(str[i] === "[" || str[i] === "{" || str[i] === "("){
        stk.push(str[i])
    }
    else{
        if(str[i] === "]" && stk[stk.length-1] === "["){
            stk.pop()
        }
        else if(str[i] === "}" && stk[stk.length-1] === "{"){
            stk.pop()
        }
        else if(str[i] === ")" && stk[stk.length-1] === "("){
            stk.pop()
        }
        
    }
}
// return stk.length
if(stk.length === 0){
    return "balance"
}
else{
    return "not balance"
}
}
console.log(balance("{[()]}"))