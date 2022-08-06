var mat = [[1,8,9],
          [2,7,10],
          [3,6,11],
         [4,5,12]]
    
    var out = ""
    for(var i = 0; i < mat.length-1; i++){
        for(var j = mat[0].length-1; j >= 0; j--){
            out+=mat[j][i]+" "
        }
    }
    console.log(out)

    //second
    var mat1 = [[1,8,9],
          [2,7,10],
          [3,6,11],
         [4,5,12]]
         var out1 = ""
         for(var i = mat1.length-2; i >= 0; i--){
        for(var j = 0; j < mat1.length; j++){
            out1+=mat1[j][i]+" "
        }
         }
         console.log(out1)

  var mat2 = [[1,8,9],
         [2,7,10],
         [3,6,11]]
var out4 = ""
         for(var i = 0; i < mat2.length; i++){
            if(i%2===0){
                for(var j = mat2.length-1; j>=0;j--){
                    out4+=mat2[i][j]+" "
                }
            }
            if(i%2===1){
                for(var j = 0; j < mat2.length; j++){
                    out4+=mat[i][j]+" "
                }
            }
         }
         console.log(out4)

         //diagonals

         var mat5 = [[1,8,9],
                    [2,7,10],
                    [3,6,11]]
     var out6 = ""
     var out7 = ""
     for(var i = 0; i < mat5.length; i++){
        for(var j = 0;j < mat5.length;j++){
            if(i===j){
                out6+=mat5[i][j]+" "
            }
            if((i+j) === mat5.length-1){
                out7+=mat5[i][j]+" "
            }
        }
     }
     console.log(out6,out7)