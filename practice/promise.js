var promise = new Promise((res,rej)=>{
    var a = 3;
    var b = 3;
    if(a===b){
        res();
    }
    else{
        rej();
    }
})
promise.then((function(){
    console.log("succss")
}))
.catch((function(){
    console.log("fail")
}))