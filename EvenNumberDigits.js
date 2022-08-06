var arr = [42, 564, 0, 34, 123, 454, 1, 5, 45, 3556, 23442]
var out = []
var count = 0;
for(var i = 0; i < arr.length; i++){
    var str = String.valueOf(arr[i]).length;
    if(str%2==0){
        count++
        out.push(arr[i])
    }
// if(arr[i]===0){
//     console.log(1)
// }
// while(arr[i] > 0){
//     count++;
//     arr[i]/10;
// }
// if(arr[i]%2===0){
//     console.log(arr[i])
// }
}
// console.log(count,out)



///sorting an array
var g= [4,2,5,3,1]
var arr = [11,4,200]
for(var i = 0; i < arr.length; i++){
    for(var j = i+1; j < arr.length; j++){
        if(arr[j]<arr[i]){
            var temp = arr[j]
            arr[j] = arr[i]
            arr[i] = temp
        }
    }
}
// console.log(arr)
var arr1 = [1,2,3,4,4]
var arr2 = [2,4,5,5]
var i = 0,j=0,k=0;
var arr3 = []
var n1= arr1.length;
var n2 = arr2.length;
var n3 = arr3.length;
while (i < n1 && j < n2) {
    if (arr1[i] < arr2[j])
      arr3[k++] = arr1[i++];
    else
      arr3[k++] = arr2[j++];
  }
  while (i < n1)
    arr3[k++] = arr1[i++];
 
  while (j < n2)
    arr3[k++] = arr2[j++];
    console.log(arr3)
