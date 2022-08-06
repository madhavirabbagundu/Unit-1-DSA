var arr = [1,-1,1,1,0,0,0,5]
var out = [];
var count=0;
for(var i = 0; i < arr.length; i++){
    if(i === 0){
        if(arr[i] > arr[i+1]){
            out.push(arr[i])
            count++
        }
    }
    else if(arr[i] > arr[i+1] && arr[i] > arr[i-1]){
        out.push(arr[i])
        count++
    }
    else{
        count
    }

}
console.log(count)
