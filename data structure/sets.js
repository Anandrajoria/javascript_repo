"use strict";
const orderSet = new Set(["pasta", "pizza", "pizza", "rissoto", "pizza"]);
// const orderSet = new Set([{name:'adi',age:23},{name:'adi',age:23}]);   //!{ { name: 'adi', age: 23 }, { name: 'adi', age: 23 } }  Even though the objects {name: 'adi', age: 23} have identical content, they are treated as separate objects because they have different references in memory.
// console.log(orderSet);

// console.log(new Set("aditya"));

// console.log(orderSet.size); //! size of set

// console.log(orderSet.has("pizza")); //true //!check weather a element is persent in or not
// console.log(orderSet.has("bread")); //false

orderSet.add("garlic bread"); // add element in set
orderSet.add("garlic bread");

orderSet.delete("garlic bread"); // remove the element
// console.log(orderSet); //{ 'pasta', 'pizza', 'rissoto' }

for (const order of orderSet) {
  //   console.log(order);
}

//example
const staff = ["waiter", "chef", "waiter", "manager", "chef", "waiter"];

const staffUnique = [...new Set(staff)];
// console.log(staffUnique);

// console.log(new Set(["waiter", "chef", "waiter", "manager", "chef", "waiter"]).size);


//2025 features
const italianFoods = new Set([
  "pasta",
  "gnocchi",
  "tomato",
  "ladyfinger",
  "garlic",
  "basil",
  "olive oil",
]);


const maxicanFoods = new Set([
  "tortiles",
  "beans",
  "tomato",
  "garlic",
  "avocado",
  "rice",
]);
const commonFoods=italianFoods.intersection(maxicanFoods)
// console.log('intersection:',commonFoods); //{ 'tomato', 'garlic' }

const allFoods=italianFoods.union(maxicanFoods)
// console.log('union',allFoods);

const uniqueitalianFoods=italianFoods.difference(maxicanFoods)
// console.log(uniqueitalianFoods); //{ 'pasta', 'gnocchi', 'ladyfinger', 'basil', 'olive oil' }

console.log(italianFoods.isDisjointFrom(maxicanFoods));
