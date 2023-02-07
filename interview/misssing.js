function missing(arr){
var max = 0
var sum = 0;
    for(var i = 0; i < arr.length; i++){
         sum+= arr[i]
        if(arr[i] > max){
            max = arr[i]
            
        }

    }
    var n =  (max*(max+1)/2)
    console.log(n-sum)

    

}
console.log(missing([1,2,4]))