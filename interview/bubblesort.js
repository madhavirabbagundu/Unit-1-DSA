function bubblesort(arr){
for(var i = 0; i < arr.length-1; i++)
{
    for(var j = 0; j < arr.length-1-i; j++){
        if(arr[j] > arr[j+1]){
            var swap = arr[j]
            arr[j] = arr[j+1]
            arr[j+1] = swap
        }
    }
}
return arr
}
console.log(bubblesort([9,7,6,9,3]))