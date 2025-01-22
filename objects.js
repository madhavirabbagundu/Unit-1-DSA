// var lower = [2,4,6,2,4,8,2,5,5];
// var item={}
//  for(var i= 0; i < lower.length; i++){
//    var char = lower[i];
   
//    if(item[char] === undefined){
//      item[char] = 1;
     
//    }
//    else {
//      var previous = item[char]
//      item[char]= previous+1;
//    }
//  }
// console.log(item)
//  for(key in item){
//     if(item[key]>=2){
//     console.log(key)
//     }
// //    console.log(key + " _ " +item[key])
//  }


 var ar = [3,4,5,5,7,4,4,3]
var item1 ={}
 for(var i = 0; i < ar.length; i++){
    var char = ar[i]
    // console.log(item1[char])
    if(item1[char] === undefined){
        item1[char] = 1
    }
    else{
        var prev = item1[char]
        item1[char] = prev+1
    }
 }
//  console.log(item1)
for(key in item1){
    console.log(key+" "+item1[key])
    if(item1[key]>2){
        console.log(key)
    }

}
///pattern

function pattern(n){
    for(var i = 0; i < n; i++){
        var out = ""
        for(j = 1;j <=i; j++){
            if(j === 1){
                out+="*"+" ";
            }
            if(i === n-1){
                out+="*"+" "
            }

        }
        // console.log(out)

    }
    // return out

}
console.log(pattern(5))