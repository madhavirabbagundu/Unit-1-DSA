var arr = [1,2,6,4,3]
var sum = 0;
let n=arr.length+1;
console.log(n)

let sumn=parseInt(n*(n+1)/2);
for(var i = 0; i < arr.length; i++){
    sum+=arr[i];
    
}
console.log(sumn-sum);
