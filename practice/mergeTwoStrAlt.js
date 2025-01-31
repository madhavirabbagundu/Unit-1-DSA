function merge(s,s1){
    let n = Math.max(s.length,s1.length)
    // console.log(n)
    var merge = ""
for(let i = 0; i < n; i++){
    if(i < s.length){
  merge +=s[i].toUpperCase();
    }
    if(i < s1.length){
        merge += s1[i].toLowerCase()
    }
}
console.log(merge)

}
merge("madhavi","chai")

function mergeAlternately(str1, str2) {
    let merged = '';
    const maxLength = Math.max(str1.length, str2.length);
  
    for (let i = 0; i < maxLength; i++) {
      if (i < str1.length) merged += str1[i];
      if (i < str2.length) merged += str2[i];
    }
  
    return merged;
  }
  
  // Example usage
  const string1 = "abc";
  const string2 = "12345";
  console.log(mergeAlternately(string1, string2)); // Output: "a1b2c345"
  