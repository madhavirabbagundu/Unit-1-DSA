function prime(n){
for(var i = 0; i < n; i++){
    var count = 0;
    for(var j = 2; j < n; j++){
        if(i % j === 0){
            count++
        }
    }
    // console.log(count)
    if(count === 1){
        console.log(i)
    }
}
}
console.log(prime(10))