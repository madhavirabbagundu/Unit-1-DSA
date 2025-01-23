function secHighest(arr){
    arr.sort((a,b)=>a-b)
    console.log(arr)
    console.log(arr[arr.length-2
        
    ])

    
}
secHighest([2,4,6,8,7])

//subarray sum max 1st method
function subarraymax(arr){
    var sum = 0;
    var max = 0;
    for(var i = 0; i < arr.length; i++){
        sum+=arr[i]
        if(sum > max){
            max = sum;
        }
        if(sum < 0){
            sum = 0;
        }
    }
    console.log(max);

}
subarraymax([-2,1,-3,4,-1,2,1,-5,4])

//second method
function secondMethod(arr){
    var max =  arr[0];
    for(var i = 0; i < arr.length; i++){
        var sum  =0;
        for(var j = i; j< arr.length; j++){
            console.log(arr[j])
            sum+=arr[j]
       if(sum > max){
             max = sum;
         }

        }
    }
    return max;

}
console.log(secondMethod([-2,1,-3,4,-1,2,1,-5,4]));