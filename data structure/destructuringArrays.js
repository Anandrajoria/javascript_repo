"use strict";

const restaurant = {
  name: "classicso italino",
  location: "A-24 gopal nagar benad road jaipur",
  categories: ["italian", "pizza", "vagertarian", "organic"],
  starterMenu: ["focaccia", "bruschetta", "garlic bread", "caprese salad"],
  mainMenu: ["pizza", "pasta", "resotto"],
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;
// console.log(x,y,z);

let [main, secondary] = restaurant.categories;
// console.log(main,secondary);

//!switching variable
// let temp=main;
// main=secondary;
// secondary =temp
// console.log(main,secondary);

// [main,secondary]=[secondary,main]
// console.log(main,secondary);

//! recieve 2 return valuse from a function
const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, mainCourse);


//! nested destructuring
const nested=[2,4,[5,6]];
// const [i,,j] = nested
// console.log(i,j);

const [i,,[j,k]]=nested
console.log(i,j,k);

//!default valuse
const [p,q,r]=[8,9]
console.log(p,q,r);
