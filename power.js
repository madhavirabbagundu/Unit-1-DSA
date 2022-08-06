// var a = 4
function power(n){
var count = 0;
while(n!==1){
		if(n%2!= 0){
			return false;
        }
			n = n/2;
            console.log(n)
		
    }
    return true;
    }
    console.log(power(24))



    //bubble sort

    function bubble(arr){
        for(var i = 0; i < arr.length; i++){
            for(var j = 0; j<arr.length-i-1; j++){
                if(arr[j] > arr[j+1]){
                  var temp = arr[j+1]
                  arr[j+1] = arr[j]
                  arr[j] = temp

                }

            }
        }
        return arr
    }
    console.log(bubble([3,9,8,5]))