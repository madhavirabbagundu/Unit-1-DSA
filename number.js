var n = 3;
var sum = 0;
for(var i = 0; i <= n; i++){
  if(i%2===0){
    sum+=i
  }
}
console.log(sum)

//second question
// var n = 32
var N = 0
var x = Math.floor(32/N)
var out = ""
    if(N === 0){
        out = "-1"
    }
    else {
         if(x === 0){
        out = "Too Low"
         }
         else{
            out = x;
         }
    }
console.log(out)