var cl=console.log;

function add(x,y) {
    return x+y
    
}
cl(add(10,10))


function mult(x,y){
    return x*y
}
cl(mult(5,5))

module.exports={
    add,
    mult
}