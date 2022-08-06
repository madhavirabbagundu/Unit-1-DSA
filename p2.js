let arr=[1,1,2,2,3,3,4];
// arr.map()
// console.log(arr)
var out = "";
for(var i = 0; i < arr.length; i++){
    // for(var j = 0; j < arr.length; j++){
        if(arr[i] !== arr[i+1]){
            // out++
            // break;
            // console.log(arr[j])
            out += arr[i+1]

        }
    }
    // console.log(out)

// }
  
// var arr1 = "1032"
// console.log(arr1.length)
// var out1 = ""
// for(var k = arr1.length-1; k >=0;k--){
//     out1+=arr1[k]
// }
// console.log(out1)

// function dup(arr){
//     var arr1 = [1,2,3,4,5,4,4,2]
//     var temp = {}
//     for(var i = 0; i < arr1.length; i++){
//         // console.log(arr)
//         if(temp[arr1[i]] === undefined){
//             temp[arr1[i]] = 1
//         }
//         else{
//             var prev = temp[arr1[i]]
//             temp[arr1[i]] = prev+1
//         }
//     }


// // }
// console.log(temp)
// for(key in temp){
//     console.log(temp[key])
// }

var ar = [7,2,3,4,5,5,2,7,4]
var count = 0;
var arr2 = ar.map(item => item==item?count++:count)
    

    console.log(arr2)

    const numbers = [1, 2, 3, 2, 4, 5, 5, 6];

    const set = new Set(numbers);
    // console.log(set)
    
    const duplicates = numbers.filter(item => {
        // console.log(duplicates)
        if (set.has(item)) {
            set.delete(item);
        } else {
            return item;
        }
    });
    
    console.log(duplicates);
    
