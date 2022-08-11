
var arr = [2,5,3,6]
function first(){
    var n = 10;
    return function (){
        console.log(n)
        return function(){
            console.log(n)
        }
    }
}
var res = first()
var res1= res()
res1()


//debouncing
