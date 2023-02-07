function intersection(arr,arr1){
var out = []
    for(var i = 0; i < arr.length; i++){
        for(var j = 0; j < arr1.length; j++){
            if(arr[i] === arr1[j]){
                out.push(arr1[j])
            }
            
        }
    }
    return out
}
console.log(intersection([2,4,4],[5,4,4]))