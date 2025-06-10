//! primitve and non primitive data types

//Boolean
console.log(typeof true); //boolean
console.log(typeof Boolean(true)); //boolean
console.log(typeof new Boolean(true)); //object
console.log(typeof new Boolean(true).valueOf()); //boolean

//string
console.log(typeof "abc");
console.log(typeof String("abc"));
console.log(typeof new String("abc"));
console.log(typeof new String("abc").valueOf());

//number
console.log(typeof 123);
console.log(typeof Number(123));
console.log(typeof new Number(123));
console.log(typeof new Number(123).valueOf());

String.prototype.returnMe = function () {
  return this;
};

var a = "abc";
var b = a.returnMe();

console.log(a);
console.log(typeof a);
console.log(b);
console.log(typeof b);

Number.prototype.toString=function(){
    return typeof this
}
(123).toString()