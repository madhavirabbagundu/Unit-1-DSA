for(var i = 0 ; i <= 7; i++){
    var out = ""

    if(i%5===0 && i%7===0){
        out= "Masai Scool"
    }
    else if(i%7===0){
        out = "Masai"
    }
    else if(i%5 ===0){
        out ="School"
    }
    else{
        out = "Hurray!"
    }
    // console.log(out)
}

//Breaking a record

var a = 264;
var b = 200;
if(a > b){
    console.log("Not Yet")
}
else if(a === b){
    console.log("Wao")
}
else{
    console.log("Broken")
}

// 42 equal

var arr = [3,2,0,2,8]
var out = ""
 for(var i = 0; i < arr.length; i++){
    if(arr[i]===42){
        out = "Yes"
    }
   
   
 }
//  console.log(out)
 if(out === "Yes"){
    console.log("Yes")
 }
 else{
 console.log("No")
 }

 //largestAnd Smallest
 var arr1 = [-2,0,8,4];
 var max = 0;
 var min = 0;
 for(var k = 0; k < arr1.length; k++){
    if(arr1[k] > max){
        max = arr1[k]
    }
    if(arr1[k] < min){
        min = arr1[k]
    }
 }
 console.log(max,min)

 //average


 var a = [2,5,0,9]
 var sum = 0;
 for(var i = 0; i < a.length; i++){
    sum += a[i]
    var avg = sum/a.length
 }
 console.log(sum,avg)

 // oddEvenSum
 var b =[1,2,3,4]
 var even = 0;
 var odd = 0;
 for(var  i = 0; i < b.length; i++){
    if(b[i]%2===0){
        even+=b[i]
    }
    else{
        odd+=b[i]
    }
 }
 if(odd > even){
    console.log("odd")
 }
 else{
    console.log("Even")
 }