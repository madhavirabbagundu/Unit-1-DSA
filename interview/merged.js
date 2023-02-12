var romanToInt = function(s) {
    // console.log(s)
    const myMap = {
     'I' : 1,
     'V' : 5,
     'X' : 10,
     'L' : 50,
     'C' : 100,
     'D' : 500,
     'M' : 1000
    }
    // console.log(myMap)
    let out = 0;
   
    for(var i = 0; i < s.length; i++){
        const curr = myMap[s[i]]
        const prev = myMap[s[i+1]]
        if(curr < prev){
            out+=prev-curr
            i++
        }
        else{
          out+=curr
        }
    }
return out
};