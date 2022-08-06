var arr = [2,4,4,6,8]
var arr1 = [1,6,6,8,9]
var n = arr.length;
var n1 = arr1.length;

var arr2 = []
var n2 = arr2.length;
var i = 0;
var j = 0;
var k = 0;
function sort(arr,arr1){
    while(i < n && j < n1){
        if(arr[i] < arr1[j]){
         arr2[k++]=arr[i++]
        }
        else{
            arr2[k++] = arr1[j++]
        }
    }
    while(i < n){
        arr2[k++]=arr[i++]
    }
    while(j < n1){
        arr2[k++] = arr2[j++]
    }
    console.log(arr2)
}
sort(arr,arr1)