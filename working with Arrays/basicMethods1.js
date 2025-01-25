"use strict";
let arr = [1, 2, 3, 4, 5];

// ! slice method
// console.log(arr.slice(2))
// console.log(arr.slice(2,4));

// console.log(arr.slice(-2));            //[ 4, 5 ]
// console.log(arr.slice(1, -2));       //[ 2, 3 ]
// console.log(arr.slice());         //[ 1, 2, 3, 4, 5 ]

//! splice method= this method does change the original array

// console.log(arr.splice(2));
// console.log(arr);

// console.log(arr.splice(-3, 1));
// console.log(arr);

//!reverse
const arr2 = ["j", "i", "h", "g", "f"];
// console.log(arr2.reverse());

// console.log(arr2);

//! concate
const letter = arr.concat(arr2);
// console.log(letter);
// console.log([...arr, ...arr2]);

//! join
// console.log(letter.join('_'));

//! at
arr = [1, 2, 3, 4, 5];

//* methods to get last element of array
console.log(arr[arr.length - 1]);
console.log(Number(arr.slice(-1)));
// console.log(Number(arr.splice(-1)));

// console.log(arr.slice(-1)[0]);
// console.log(arr.splice(-1)[0]);
console.log(arr.at(-1));
