//! == vs === vs typeof

// == loose operator   and  === is strict equality operator

// console.log(typeof(null));
console.log(false==0);// true
console.log(false===0);// false = it check the type also

console.log(0==''); //true
console.log(''==false);//true

console.log(null==undefined);//true
console.log(null=== undefined); //false

console.log(NaN==undefined);//false
console.log(NaN==NaN);//also false



