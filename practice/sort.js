var arr = [400,6,800,9,2]
// console.log(arr.sort())
// var data = arr.sort((a,b)=>{
//     return a-b
// })
// console.log(data)

for(var i =0; i < arr.length; i++){
    for(var j = i+1; j < arr.length; j++){
        if(arr[i] > arr[j]){
            var temp =  arr[j]
            arr[j] = arr[i] 
            arr[i] = temp
        }
    }
}
console.log(arr,"Arr")