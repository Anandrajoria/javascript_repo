"use strict";
const weekDays = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

const restaurant = {
  name: "classicso italino",
  location: "A-24 gopal nagar benad road jaipur",
  categories: ["italian", "pizza", "vagertarian", "organic"],
  starterMenu: ["focaccia", "bruschetta", "garlic bread", "caprese salad"],
  mainMenu: ["pizza", "pasta", "resotto"],

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  openingHours: {
    [weekDays[3]]: {
      open: 12,
      close: 22,
    },
    [weekDays[4]]: {
      open: 11,
      close: 15,
    },
    [weekDays[5]]: {
      open: 9,
      close: 23,
    },
  },
};

//! properties names
const properties = Object.keys(restaurant.openingHours);
// console.log(properties);

let openStr = `we are open on ${properties.length} days`;

for (const days of properties) {
  openStr += ` ${days},`;
}
// console.log(openStr);

//! properties values
const values = Object.values(restaurant.openingHours);
// console.log(values);

//entries in objects
const entry = Object.entries(restaurant.openingHours);
// console.log(entry);
/*[
    [ 'thu', { open: 12, close: 22 } ],
    [ 'fri', { open: 11, close: 15 } ],
    [ 'sat', { open: 9, close: 23 } ]
  ]
    */

for (const [key,{open,close}] of entry){
    console.log(`on ${key} we open at ${open} and close at ${close}`);
    
}
/**
on thu we open at 12 and close at 22
on fri we open at 11 and close at 15
on sat we open at 9 and close at 23
 */