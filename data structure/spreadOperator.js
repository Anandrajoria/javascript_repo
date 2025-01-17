const arr = [7, 8, 9];
const newArr = [1, 2, 3, ...arr]; //spread operator is used to copy the element of array
// console.log(newArr);
// console.log(...newArr);

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

const newMenu = [...restaurant.mainMenu, "gnocci"];
// console.log(newMenu);

//copy arr

const mainMenuCopy = [...restaurant.mainMenu];

//join 2 arrays
const menu = [...mainMenuCopy, ...restaurant.starterMenu];

// console.log(menu);

const str = "aditya";
let letter = [...str];
// console.log(letter);

//objects
const newRestauraunt = { ...restaurant, founder: "aditya" };
// console.log(newRestauraunt);

//rest parameter
const arr2 = [1, 2, 3, ...[4, 5]];
//rest because on left side of =
const [a, b, ...other] = [1, 2, 3, 4, 5];
// console.log(a, b, other);

const [pizza, , resotto, ...others] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
// console.log(pizza,resotto,others);

//objects
const { sat, order, ...weekdays } = restaurant.openingHours;
// console.log(weekdays);

//functions
const add = function (...numbers) {
  let sum=0;
  for(let i=0;i<numbers.length;i++){
    sum=sum+numbers[i];
  }
  console.log(sum);
};
add(2, 3);
add(2, 3, 4, 5);
let x=[23,245,567]
add(...x)
