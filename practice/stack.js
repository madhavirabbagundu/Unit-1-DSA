//stack problems
function stackfun(str){
    let out = []
    str = str.trim().split(" ")
    console.log(str)
    for(var i = str.length-1; i >= 0; i--){
        out.push(str[i])
    }
    console.log(out.join(" ").replace(/\s+/g, " "))

}
stackfun("a good  example")

const s1 = "   This    is  a   test   string.   ";
const s2 = s1.trim().replace(/\s+/g, " ");
console.log(s2);


//balance
function balance(str){
    var out = [str[0]]
    for(var i = 1; i < str.length; i++){
        if(str[i] === '(' || str[i]==='{' || str[i] =='['){
            out.push(str[i])
        }
        else{
            if(out[out.length-1] === '(' && str[i] === ')' ){
                out.pop();
            }
            if(out[out.length-1] === '[' && str[i] === ']' ){
                out.pop()
            }
            if(out[out.length-1] === '{' && str[i] === '}' ){
                out.pop()
            }
            
        }

        
    }
    if(out.length === 0){
        return true;
    }
    return false;

}
console.log(balance("()"))

for(var i = 0; i < 3; i++){
    setTimeout(()=>{
 console.log(i)
    },i*1000)
}