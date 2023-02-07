function duplicate(arr){
    var temp = {}
    for(var i = 0; i < arr.length; i++){
      var item = arr[i]
      if(temp[item] === undefined){
        temp[item] = 1
      }
      else{
        var prev = temp[item]
        temp[item] = prev+1
      }
    }
    console.log(temp)
    for(key in temp){
        var max = 0
        if(temp[key] > 1){
            return key
        }
    }

}
// console.log(duplicate([3,4,6,6,5]))

function duplicate(arr){
var temp = {}
  for(var i = 0; i < arr.length; i++){
var item = arr[i]
if(temp[item] === undefined){
  temp[item] = 1
}
else{
  var prev = temp[item]
  temp[item] = prev+1
}

  }
  // console.log(temp)
  for(key in temp){
    // console.log(key+" "+temp[key])
    if(temp[key] >= 2){
      console.log(key)
    }
  }
}
console.log(duplicate([4,5,3,2,1,1,4]))