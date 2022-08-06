function sumOfDigits(N){
    
    var sum  = 0;
    while(N!==0){
        sum+=N%10
        N = Math.floor(N/10);
    }
    console.log(sum)
    
    // var sum = Math.floor(N/10);
    // var res = N%10
    // console.log(sum+res)
}
sumOfDigits(31)
///

var str = "aman"
var map = new Map()
for(var i= 0; i < str.length; i++){
    if(map[str[i]]===undefined){
       map[str[i]] = 1;
    }
    else{
        map[str[i]]++
    }
}
console.log(map)
for(key in map){
    console.log(key+"-"+map[key])
}


var mat = [[1,0],
           [0,1],
           [1,1]]
      for(var i = 0; i < mat.length; i++){
        var out = ""
       for(var j = 0; j < mat[0].length; j++){
          if(mat[i][j] === 0){
              out+=1+" "
          }
          else{
            out+=0+" "
          }
            }
            console.log(out)
           }