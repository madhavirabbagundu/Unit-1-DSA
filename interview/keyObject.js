function keyObject(str){
    var temp  = {}
    for(var i = 0; i < str.length; i++){
        var item = str[i]
        if(temp[item] === undefined){
            temp[item] = 1
        }
        else{
            var prev = temp[item]
            temp[item] = prev+1
        }
    }
    console.log(temp)
    var out = 0;
    for(key in temp){
        out+=key.length
    }
    console.log(out)

}
console.log(keyObject("pwwkew"))