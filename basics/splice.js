// splice method in array
// const arr = array.splice(start, end);

//! The start argument specifies the position of the first item to apply operation and
// ! the second argument determines the number of elements on which the operation will applyed.


//? it mutate the original array

//delete element
let arr = [1, 2, 3, 4, 5];

let del = arr.splice(1, 3);
console.log(del);
console.log(arr);


// addding element suing splice method
let add=arr.splice(1,0,'a','b',1)
console.log(arr);



// replacing element
let replace= arr.splice(0,1,'adi')
console.log(arr);
