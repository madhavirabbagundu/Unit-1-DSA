// var str= "hello"
// var s = str.substr(1)


function reverseString(str) {
    if (str === "") // This is the terminal case that will end the recursion
      return "";
    
    else
      return reverseString(str.substr(1)) + str.charAt(0)
      }
 console.log(reverseString("madhu"))

//  function reverseString(str) {
//     return str.split("").reverse().join("");
// }
// console.log(reverseString("hello"));
// console.log("madhavi")