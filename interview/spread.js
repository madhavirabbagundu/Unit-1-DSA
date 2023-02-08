// var arr = [2,3,4,5]
// var arr1 = [3,4,5]
// // console.log([...arr,...arr1])

// //arrow function
// // let data = "";

//   data = () => 
//     // console.log("hello world")
 
//  data()

//   x = 20;
//  console.log(x)
//  var x 

//  var arr3 = [3,5,1,8]
//  const [a1,b2,c2,d2] = arr3
// //  console.log(a1,b2,c2,d2)
// var out = []
//  var res = arr3.forEach((e)=>{
//   // out.push(e)
//     //  console.log(e)

//  })

//   arr3.filter((e)=>{
//   // console.log(arr3)//
//   // e = e*e
//   console.log(e)
  
//  })

//  var memo = [3,4,5,6]
//  console.log(memo.slice(2))
// //  console.log(memo.splice(3))
//  console.log(memo)


//  function diagnols(arr){
// console.log(arr)
// var out = 0
// var out1 = 0
// for(var i = 0; i < arr.length; i++){
//   for(var j = 0; j < arr[0].length; j++){
//     if(i === j){
//       out+=arr[i][j]
//     }
//     if(j === arr.length-i-1){
//       out1+=arr[i][j]
//     }
//   }
// }
// console.log(out-out1)
//  }
//  console.log(diagnols([[1,2,3],[4,5,6],[7,8,9]]))

function result (arr){
  console.log(arr)
var res = []
var out = 0;

for(var i = 0; i < arr.length; i++){
  var out1 = 0;
  // if(arr[i] < 40){
     if(arr[i]%5!==0){
      for(var j = 0; j <=100;j++){
      out+=arr[i]+j
      console.log(out)
      if(out%5===0 && out >= 40){
       console.log(out)
      break;
      }
      else{
        // console.log(arr[i])
        break;
      }
    }
    }
  // }
 
}
}
console.log(result([73,78],"madhavi"))