//! variable hoisting
// console.log(me)          // undefined
// console.log(job);     //Cannot access 'job' before initialization
// console.log(year);  //Cannot access 'year' before initialization


var me='adi'
let job='teacher'
const year=2004

// function hoisting

// console.log(addDecl(2,3));
// console.log(addExp(2,3));
// console.log(addArrow(2,3));

function addDecl(a,b){
    return a+b;  // 5
}


// const addExp=function(a,b){
//     return a+b
// }
// const addArrow=(a,b)=>a+b  /*//! addExp and addArrow both cannot access before initialization */



// var addExp=function(a,b){
//     return a+b;
// }
// var addArrow=(a,b)=>a+b;

//example
console.log(numProducts);

if(!numProducts){ deleteShoppingCart()}
var numProducts=10

function deleteShoppingCart(){
    console.log('all products deleated');
}