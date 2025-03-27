/*
Dynamic and weak typing
JavaScript is a dynamic language with dynamic types. 
Variables in JavaScript are not directly associated with any particular value type,
 and any variable can be assigned (and re-assigned) values of all types: */

let foo = 10;
foo = "awd";
// console.log(foo);  //! awd  = reassignment

foo = 10;

let result = foo + "1";
// console.log(result);  //! 101  == js is weekely type language which means it allow implicit tyoe coversion when operation involve mismatched types

//! primitive types

//? 1:Number==Number data type in JavaScript can be used to hold decimal values as well as values without decimals.
//? 2:String==The string data type in JavaScript represents a sequence of characters that are surrounded by single or double quotes.

let x;
// console.log(x);

//Symbol data type is used to create objects which will always be unique. these objects can be created using Symbol constructor.