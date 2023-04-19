function subarray(arr){
    var max = 0;
for(var i= 0; i < arr.length; i++){
    for(var j = 0; j < arr.length; j++){
        var out = 0;
        for(var k = i;k <= j; k++){
            out+=arr[k]
        }
        // console.log(out)
        if(out > max){
            max = out
        }
    }
}
console.log(max)
}
console.log(subarray([-2, 1, -3, 4, -1, 2, 1, -5, 4],))