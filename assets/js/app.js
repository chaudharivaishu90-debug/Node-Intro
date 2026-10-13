var cl=console.log;

function add(x,y) {
    return x+y
    
}
// cl(add(10,10))


function mult(x,y){
    return x*y
}
// cl(mult(5,5))

let math=require("./math")
cl(math)
cl(math.add(10,10))
cl(math.mult(5,5))