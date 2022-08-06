var s = "97420"
var out1 = ""
for(var i = 0; i < s.length; i++){
    if(s[i] === "4" && s[i+1]==="2" && s[i+2]==="0"){
        out1 = "Caught"
    }
    else{
        out1= "escaped"
    }

}
// console.log(out)

//vowelz
var s1 = "masaischool"
var count = 0;
for(var i = 0; i < s1.length; i++){
    if(s1[i]==="a" || s1[i]==="e"||s1[i]==="i"||s1[i]==="o"||s1[i]==="u"){
        count++;
    }

}
// console.log(s1.length-count)

//reverse String sentence
var S = "A transfomation in education"
var out = ""
var s = S.trim().split(" ")
console.log(s)
for(var i = s.length-1;i >= 0; i--){
out += s[i]+" "
}
console.log(out.split(""))
var out2 = out.split("")
var res = ""
for(var j = out2.length-1; j >= 0; j--){
    res+=out2[j]+" "
}
// console.log(res)

//palindrome
var str = "1221";
var out3 = []
for(var i = str.length-1;i >= 0;i--){
    out3.push(str[i])

}
var out3 = out3.join("")
console.log(out3)

if(str === out3){
    console.log("yes")
}
else{
    console.log(":no")
}


//decompress
var data = "a3b2"
var res = "";
for(var i = 0; i < data.length; i++){
    var st = data[i]
    var num = data[i+1]
    for(var j = 0;j < num;j++){
        res+=st;
    }
}
console.log(res)

//
var string= "ebad"
var sum = 0;
var lower = "abcdefghijklmnopqrstuvwxyz"
for(var i = 0; i < string.length; i++){
    for(var j = 0; j < lower.length; j++){
        if(string[i]===lower[j]){
            sum+=j+1
        }
    }
}
console.log(sum)

//sum
var arr = [3,0,6,2,7]
var k = 9;
var out4 = []
// var i = 0; var j = 1
// console.log(out4)
var count  = 0;
for(var i = 0; i < arr.length; i++){
    for(var j = i+1; j< arr.length; j++){
        if(arr[i]+arr[j]===k){
            out4.push(arr[i],arr[j])
            count++
        }
    }
}
console.log(out4,count)

//intersection