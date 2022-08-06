// var arr = [1,2,3,4,5]
// var k = 7;
var out= []
function sum(arr,k){
    var i = 0
    var j = arr.length-1
    while(i < j){
      if(arr[i]+arr[j]===k){
        console.log(arr[i],arr[j])
        
         i++;
        j--;

    }
      else if(arr[i]+arr[j] > k){
        j--
      }
      else if(arr[i]+arr[j] < k){
        i++
      }
    }
    // return out
}sum([1,2,3,4,5],7)


