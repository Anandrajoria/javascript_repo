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

  orderDelivery: function ({ starterIndex, mainIndex, time, address }) {
    console.log(
      `order recieve ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delovered to ${address} at ${time}`
    );
  },
};

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// ! for off loop

// for(const items of menu) console.log(items);

for (const [i, e] of menu.entries()) {
  console.log(i);

  console.log(`${i+1}: ${e}`);
}
// console.log([...menu.entries()]);   //* entries() function gives all the values in array 
