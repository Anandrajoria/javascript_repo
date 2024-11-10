const friends=['michel','steven','peter']
//! add element
friends.push('jay')  // add element at last of array
console.log(friends);
friends.unshift('john')  //add element at start of array
console.log(friends);

// ! remove element
friends.pop()
console.log(friends);

friends.shift()
console.log(friends);

console.log(friends.indexOf('steven'));

console.log(friends.includes('steven'));  // it use strict equality

