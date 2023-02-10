//promise is a object and it is very useful to handle asynchronous operators.
// lot of function is there promise will work only catch and then.

//example
const promise = new Promise(function(res,rej){
    setTimeout(()=>{
    // console.log("output")
    res()
    },[2000])
    var a = 10
    var b= 20
    if(a!==b){
        rej()
    }
    console.log("madhavi")
})
promise.then(function(){
    console.log("sucess")
}).catch(function(){

    console.log("failure")
})