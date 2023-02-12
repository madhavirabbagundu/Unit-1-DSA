var longestCommonPrefix = function(strs) {
    var out = ''
    console.log(strs[0])
    for(var i = 0; i <= strs[0].length; i++){
        for(var j = 1; j < strs.length; j++){
            // console.log(strs[j][i+1])
            if(strs[0][i] !== strs[j][i]){
                // console.log(strs[0],slice(0,i))
              return strs[0].slice(0, i);            }
            else{
                out+=""
            }
        }
    }
    return strs[0]
    
};