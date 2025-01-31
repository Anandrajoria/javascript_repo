"use strict";
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const balance=movements.reduce((acc,curVal,i)=>{
//     console.log(`${i}:${acc}`);
//     return acc+curVal
// },0)        //set accumulator to zero
// console.log(balance);

let result = 0;
for (const val of movements) { result+=val}
console.log(result);
