"use strict";

//we can not use here arrow function because arrow function does not have his own this
const Person = function (firstName, birthyear) {
  // console.log(new.target);

  //instance properties
  this.firstName = firstName;
  this.birthyear = birthyear;

  //this is never used in constructor function
  // this.calcAge = function () {
  //   console.log(2037 - this.birthyear);
  // };
};

// ! difference between constructor and regular function is that we use New keyword to call constructor function
let adi = new Person("adi", 1991);
let shubh = new Person("shubh", 2003);
// console.log(adi);
// console.log(shubh.calcAge());

//? here shubj is instance of Person constructor
// console.log(shubh instanceof Person);  //? true

//! behind the sceane
//1:New empty onject {} is created
// 2:function is called this={}
// 3:{} linked to prototype
// 4:function automatically return {}

let itachi = new Person("itachi", 1993);
// console.log(itachi);

console.log(Person.prototype);

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthyear);
};

adi.calcAge();

// console.log(adi.__proto__);

// console.log(Person.prototype.isPrototypeOf(adi));

//give properties to prototype
Person.prototype.species='homo sapiens'
console.log(adi);

