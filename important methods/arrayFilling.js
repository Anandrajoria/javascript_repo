"use strict";
let x = new Array(7);

x.fill(1, 3, 5); // firston is value, 2nd one is start place,3rd is end place 
console.log(x);


//array.from
const y=Array.from({length:7},()=>1)
// console.log(y);

const z=Array.from({length:7},(_,i)=>i+1)
console.log(z);