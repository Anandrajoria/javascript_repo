"use strict";

const weekDays = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

const openingHours = {
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
};
const restaurant = {
  name: "classicso italino",
  location: "A-24 gopal nagar benad road jaipur",
  categories: ["italian", "pizza", "vagertarian", "organic"],
  starterMenu: ["focaccia", "bruschetta", "garlic bread", "caprese salad"],
  mainMenu: ["pizza", "pasta", "resotto"],

  //! ES6 enhance object literals
  openingHours,
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

// console.log(restaurant);

//! without optional chaining
// if (restaurant.openingHours.fri) console.log(restaurant.openingHours.fri.open);
// console.log(restaurant.openingHours.mon.open);

// ! with optional chaining
// console.log(restaurant.openingHours.mon?.open);  //* if it is = restaurant.openingHours.mon  right then it will go further but if it is wrong it will return undefined and null

// example
const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
for (const day of days) {
  // console.log(day);
  const open = restaurant.openingHours[day]?.open || "closed";
  //   console.log(open);
}

// ! optional chaining on arrays
const users = [
  { name: "adi", email: "adi@gmail.com" },
  { name: "shubhi", email: "shubhi@gmail.com" },
];
// console.log(users[0].email ?? "user data is empty");   //*adi@gmail.com
console.log(users[0].gmail ?? "user data is empty");   //* user data is empty

