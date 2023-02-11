function substring(str){
    var max = 0;
    var res  = ''
    for(var i = 0; i< str.length; i++){
        for(var j = i; j < str.length; j++){
            var out = ''
            var out1 = ''
            var sum = 0
            for(var k = i; k <= j; k++){
                out+=str[k]
            }
            // console.log(out)
            for(var l = out.length-1; l >= 0; l--){
                out1+=out[l]
            }
            // console.log(out1,out)
            if(out1 === out){
                sum+=out.length
            }
            // console.log(sum)
            if(max < sum){
                max = sum
                res = out
            }
        }
    }
    console.log(max,res)

}
console.log(substring("cbbd"))

var ar = [3,-2,-1]
var arr1 = [-8,-9,-3]
ar.sort()
// console.log(arr1.sort())
function sorted(arr,arr1){
var out = 0
var out3 = 0
for(var i = 0; i < arr1.length; i++){
    arr.push(arr1[i])
    }

    for(var i = 0; i < arr.length-1;i++){
        for(var j = 0; j < arr.length-i-1; j++){
            if(arr[j] > arr[j+1]){
                var temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
            }
        }
    }
    // var out = arr1.sort()
    console.log(arr)
    if(arr.length%2===0){
        out += arr.length/2
        console.log(out)
         out3 += (arr[out]+arr[out-1])/2
    }
    else{
        out+=Math.floor(arr.length/2)
        // console.log(out)

        out3 += arr[out]
    }
return out3
}
console.log(sorted([3,4,5],[-2,-1,0]))