"use strict";

// const bookings = [];

// const createBooking = function (flightNum, numPassanger=1, price=199) {
//     // ! ES5 to write default parameter
// //   numPassanger = numPassanger || 1;
// //   price ||=220
//   const booking = {
//     flightNum,
//     numPassanger,
//     price,
//   };
//   console.log(booking);
//   bookings.push(booking);
// };
// createBooking("lh123");
// createBooking('h3er2',2,900)

//! we can also set parameter expression based on other parameter
const bookings = [];

const createBooking = function (
  flightNum,
  numPassanger = 1,
  price = 199 * numPassanger
) {
  const booking = {
    flightNum,
    numPassanger,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};
createBooking("lh123"); //!{ flightNum: 'lh123', numPassanger: 1, price: 199 }
createBooking("h3er2", 2); //!{ flightNum: 'h3er2', numPassanger: 2, price: 398 }

// the parameter are mapped to their argument
createBooking("2HER45", undefined, 1000); //!{ flightNum: '2HER45', numPassanger: 1, price: 1000 }
