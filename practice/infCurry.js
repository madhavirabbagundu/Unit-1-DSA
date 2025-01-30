function fir(a){
   return function (b){
       return function (c){
          return a+b+c;
        }

    }
}
console.log(fir(2)(6)(3))

//infinite function
function curry(a){
    return function(b){
        if(b){
            return curry(a+b);
        }
        else{
            return a;
        }
    }
    
    }
    var da = curry(4);
    console.log(da(4)(5)())