var str = "{({[]})}"
function balance(str){
    var s = [str[0]]
    for(var i = 1 ; i< str.length; i++){
        if(str[i]==="{" || str[i]==="["|| str[i]==="("){
            s.push(str[i])
        }
        else{
            if(str[i]==="}" && s[s.length-1]==="{"){
                s.pop()
            }
            else if(str[i]===")" && s[s.length-1]==="("){
                s.pop()
            }
            else if(str[i]==="]" && s[s.length-1]==="["){
                s.pop()
            }
            // else{
            //     s.length=1
            // }
        }
    }
    return s
    if(s.length===0){
        return "balanced"
    }
    else{
        return "non balanced"
    }
}
console.log(balance("{({[})}"))



// differnce

function diff(arr,k){
    var i = 0;
    var j = 1;
    var count = 0;
    var out = []
    while(i < arr.length && j < arr.length){
        if(arr[j]-arr[i]===k){
            out.push(arr[j],arr[i])
            count++

            i++
            j++


        }

        else if(arr[j]-arr[i] > k){
               i++
         }
           else if(arr[j]-arr[i] < k){
            j++
            }
            // return count

    }
    return out
    // return count
}
console.log(diff([1,2,3,4,5],3))


///array duplicate
var sum = 0
function dup(arr){
    for(var  i = 0; i < arr.length; i++){
        sum+=arr[i]
    }
    console.log(sum)
    var n1 = arr.length-1;
    var n = (n1*(n1+1))/2
    console.log(n)

    var out =(sum-n)
    return out
}
// console.log(dup([1,2,2,3,4]))

//duplicate

function duplicate(arr){
    var out1 = []
    for(var i = 0; i < arr.length; i++){
        for(var j = i+1; j < arr.length; j++){
            if(arr[i] === arr[j]){
                out1.push(arr[j])
            }
        }
    }
    return out1
}
// console.log(duplicate([1,22,22,4,6,6,4]))

//objects
var lower = "masaischool";
var item={

}
 for(var i= 0; i < lower.length; i++){
   var char = lower[i];
   
   if(item[char] === undefined){
     item[char] = 1;
     
   }
   else {
     var previous = item[char]
     item[char]= previous+1;
   }
 }
console.log(item)
 for(key in item){
   console.log(key + " _ " +item[key])
 }