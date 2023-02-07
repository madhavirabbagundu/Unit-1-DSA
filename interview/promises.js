var promise = new Promise(function(res,rej){
    var a = 2;
    var b= 2;
    if(a === b){
        res()
    }
    else{
        rej()
    }
});
promise.then((function(){
    console.log("sucess")
})).catch((function(){
    console.log("faillure")
}))
