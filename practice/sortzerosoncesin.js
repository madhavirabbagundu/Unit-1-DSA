function sort(arr){
var arr1 = arr.sort()
return arr
}
console.log(sort([2,0,1,0,2,1]))

// Find the majority element in an array.
function majority(arr){
var temp = {}

for(var i = 0; i < arr.length; i++){
    var item = arr[i]
    if(temp[item]===undefined){
        temp[item] = 1
    }
    else{
        var prev = temp[item]
        temp[item] = prev+1
    }
}
console.log(temp)
for(key in temp){
    var num = 0;
    if(temp[key] > num){
        return temp[key]
    }
// console.log(temp[key])
}
}
console.log(majority([2,5,6,7,2,6,2]))
