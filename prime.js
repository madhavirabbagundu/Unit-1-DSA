// var n = 1;
// function prime(n){
    for(var i = 1; i <= 109; i++){
        var count = 0

        for(var j = 2; j <=i; j++){
            if(i%j===0){
                count++;


            }

}
// console.log(count+"--"+i)
if(count == 1){
    // console.log(i)
}


    }


//matrix

var mat = [[0,1,0],
          [3,4,5],
          [1,2,3]]

          for(var i = 0; i < mat[0].length; i++){
            for(var j = 0; j < mat[0].length; j++){
                if(mat[i][j]===0){
                    mat[0]=0
                    mat[j][i]=0
                }
            }
          }
        //   console.log(mat)



          //duplicate
        var sum = 0;
        var out = 0;
          var arr = [1,2,2,4,3]
          for(var i = 0; i < arr.length; i++){
            sum+=arr[i]
          }
          var t = arr.length-1
          var value = (t*(t+1))/2
           out =Math.abs(value-sum)
        //   console.log(out)

        // duplicate
        var arr =[3,4,6,4,3,3]
        var out = []
        for(var i = 0; i < arr.length; i++){
          for(var j = i+1; j < arr.length; j++){
            if(arr[i]===arr[j]){
            out.push(arr[j])
            }
          }
        }

        console.log(out)










        const numbers = [1,2,2,4,3,4,3,8,2];

const set = new Set(numbers);
console.log(set)
const duplicates = numbers.filter(item => {
    if (set.has(item)) {
        set.delete(item);
    } else {
        return item;
    }
});

console.log(duplicates);
duplicate= false;

const number = [1,2,2,4,3,4,3,8,2];
for(var i = 0; i < number.length; i++){
  for(var j = 0; j < number.length; j++){
    if(i!=j){
      if(number[i]==number[j]){
        duplicate = true;
        break;
      }
    }
 if(duplicate){
  break;
 }
  }
}
if(!duplicate) {
  console.log(`Array doesn't contain duplicates.`);
} else {
  console.log(`Array contains duplicates.`);
}