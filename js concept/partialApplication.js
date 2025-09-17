// partial application in js

//normal function
function add(x,y,z){
    return x+y+z
}
console.log(add(1,2,3));


//fewer remaining

function addPartial(x,y,z){
    return x+y+z
}
const partialFun=addPartial.bind(null,2)

console.log(partialFun(2,3));
