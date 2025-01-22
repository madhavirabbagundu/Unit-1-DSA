function palindrome(str,n){
    var temp = {}
    for(var i = 0; i < n; i++){
        var item = str[i]
        if(temp[item] === undefined){
            temp[item] = 1
        }
        else{
            var prev = temp[item]
            temp[item] = prev+1
        }
    }
    // console.log(temp)
    var count = 0
    for(key in temp){
        console.log(key+" "+temp[key])
        if(temp[key]%2 ===1){
            count++;
        }
        
    }
    if(count > 1){
        console.log("Not Possible!")
        }
        else{
            console.log("Possible!")
        }
    }
console.log(palindrome("A man, a plan, a canal: Panama"))

    /**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    s = s.toLowerCase().replace(/[^a-z0-9]/gi,'');
    var out = ""
   for(var i = 0; i < s.length; i++){
  out = s[i]+out
   }
   if(out === s){
    return true;
   }
   return false;
};

//Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.