var arr = [2,3,7,48,9]
var count = 0;
var count1 = 0;
var sum = 0
var avg = 0;
for(var i = 0; i < arr.length; i++){
     sum += arr[i]
     avg = (sum/arr.length);
    if(arr[i] > avg){
        count++
    }
    if(arr[i] < avg){
        count1++
    }
}
console.log(count1,count,avg,sum)