"use strict";
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
//sort function also mutuate original array
// [-130, -400, -650,1300,  200, 3000,450,70]

//! and sort method sort based on strings

const sortedArray = movements.sort();
// console.log(sortedArray);

// return < 0 A,B (keep order)
// return >0 B,A (switch order)

movements.sort((a, b) => {
  if (a > b) return 1;
  if (a < b) return -1;
});
console.log(movements);

// const sort= movements.sort((a,b)=>{
//     return a-b
// })
// console.log(sort);
