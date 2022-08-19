// var arr = [3,7,2,9,1]
function bubble(arr){
for(var i = 0; i < arr.length-1;i++){
    // flag = 0;
    for(var j = 0; j < arr.length-1-i; j++){
     if(arr[j] > arr[j+1]){
        var temp = arr[j]
        arr[j] = arr[j+1]
        arr[j+1] = temp
        // falg = 1
     }
    //  if(flag === 0){
    //     break;
    //  }
    }
}
console.log(arr)
}
bubble([6,7,2,9,1])