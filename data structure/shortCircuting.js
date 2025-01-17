// use any data type return any data type ,

// short circuting = if it sees any truthy value it will immediately return the thruthy value
// console.log("----OR----");

// console.log(2 || "jonas");
// console.log("" || "jonas");
// console.log(true || 0);
// console.log(undefined || null);
// console.log(undefined || 0 || "" || "hello" || 23 || null);

("use strict");

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

restaurant.numGuests = 23;
const guest = restaurant.numGuests ? restaurant.numGuests : 3;
// console.log(guest);

const guest2 = restaurant.numGuests || 10;
// console.log(guest2);

// console.log("----AND----");

// console.log(2 && "jonas");
// console.log("" && "jonas");
// console.log(true && 0);
// console.log(undefined && null);
// console.log(undefined && 0 && "" && "hello" && 23 && null);


//! nullish values= null and undefined(not 0 and '')
//?nullish operator return first value if it is not null or undefined otherwise it will return 2nd value
let restraunt;
// restraunt=0
const guestCorrect = restraunt ?? 10;
console.log(guestCorrect);
