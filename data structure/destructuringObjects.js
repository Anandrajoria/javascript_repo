"use strict";

const restaurant = {
  name: "classicso italino",
  location: "A-24 gopal nagar benad road jaipur",
  categories: ["italian", "pizza", "vagertarian", "organic"],
  starterMenu: ["focaccia", "bruschetta", "garlic bread", "caprese salad"],
  mainMenu: ["pizza", "pasta", "resotto"],
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 15,
    },
    sat: {
      open: 9,
      close: 23,
    },
    order: function (starterIndex, mainIndex) {
      return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },
  },

  orderDelivery: function ({starterIndex,mainIndex,time,address}) {
    console.log(`order recieve ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delovered to ${address} at ${time}`);
  },
};

  restaurant.orderDelivery({
    time: "22:23",
    address: "gopal nagar",
    mainIndex: 2,
    starterIndex: 3,
  })


const { name, openingHours, categories } = restaurant;
// console.log(name,openingHours,categories);

const { name: restroName, openingHours: hours, categories: tags } = restaurant; // giving new name to objects properties
// console.log(restroName,hours,tags);

const { menu = [], starterMenu: starter = [] } = restaurant;
// console.log(menu,starter);

//!mutating variables
let a = 11;
let b = 22;
const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj);
// console.log(obj);

//! nested objects
const {
  fri: { open, close },
} = openingHours;
// console.log(open,close);
