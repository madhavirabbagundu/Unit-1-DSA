function prime(n){
    for(var i = 1; i <= n; i++){
        var count = 0;
        for(var j = 2; j <=n; j++){
            // console.log(i%j)
          if(i%j===0){
            count++
          }
        }
        if(count ===1){
        console.log(i)
        }
    }
}
console.log(prime(10))