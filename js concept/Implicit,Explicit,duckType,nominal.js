/* as js is dynamic typed language , that types are associated with values rather then varibale 
type checking done at runtime */

//! implicit typing or type coercion
//? => this occur when js automatically convert one type to another when required
console.log(123+'');  // type of 123+'' => string


//!explicit typing
//?Unlike implicit typing, explicit typing involves manually converting a value from one type to another using functions like Number(), String(), or Boolean().
console.log(String(123));

//!nominal typing
//?