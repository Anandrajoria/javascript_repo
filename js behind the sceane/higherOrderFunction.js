// x is the callback function
function x() {
  console.log("hello");
}
//here y takes x()  as an argument is  higer order function
function y(x) {
  x();
}

