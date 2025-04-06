//! function statement  === function declearation == we can use it even before declearation
// a();
function a() {
  console.log("adi");
}

//! function expression == and here we can't use it before declearation
//  console.log(b);

var b = function () {
  //   console.log("banana");
};

// b();

//! anonymous function === function without name
let multiply = (a, b) => a * b;
// console.log(multiply(1, 2));

// ! named function expression
let d = function add() {
  console.log(add);
};
// d();

//! difference between parameter and arguments

var paramater = function (param1) {
  console.log("arguments");
};
// paramater('asd')

//! first call function === first class citizen

//* function as variable
const greet = function () {
  console.log("hellow");
};
greet();

//* passed as argument
function greet2() {
  console.log("hellow 2");
}
function callFun(fn) {
  fn();
}
callFun(greet);

//*return from another function
function outer() {
  return function inner() {
    console.log("inner function");
  };
}
outer()();
