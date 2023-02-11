function merge(arr,arr1){
    var out = ''
    var out1 = ''
    var sum = 0
    var res = []
    var out2 = ''
    for(var i = arr.length-1; i>=0; i--){
        out+=arr[i]
    }
    console.log(out)
    for(var i = arr1.length-1; i>=0; i--){
        out1+=arr1[i]
    }
    console.log(out1[0])
    sum+=Number(out)+Number(out1)
     out2 = sum.toString().split('').map(Number)
    console.log(out2)


    for(var i = out2.length-1; i>=0; i--){
        res.push(out2[i])
    }
    console.log(res)


}
console.log(merge([2,4,3],[5,6,4]))