"use strict";
const lofHansa = {
  airlines: "lofHansa",
  iataCode: "LH",
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airlines} flight ${this.iataCode} ${flightNum}`
    );
  },
};

// lofHansa.book(239, "adi rajoriya");
// console.log(lofHansa);

const euroWings = {
  name: "eurowings",
  airlines: "reliance",
  iataCode: "EW",
  booking: [],
};
const book = lofHansa.book;
// book(23,'sadie blake')

// book.call(euroWings, 23, "batman");
// console.log(euroWings);

const flightdata = [583, "george cooper"];
// book.apply(euroWings, flightdata);
// console.log("rurowings data", euroWings);

// book.call(euroWings, ...flightdata);

//! bind method
const bookEw = book.bind(euroWings);
const bookLh = book.bind(lofHansa);
// bookLh(45,'gal galot')
// bookEw(23,'steven')

const bookEW = book.bind(euroWings, 34, "krishna");
// bookEW();


// const addTax = (rate, value) => value + value * rate;
// console.log(addTax(0.1,200));
// const addVAT=addTax.bind(null,0.23)
// console.log(addVAT(100));

const addVAT = function (rate) {
  return function (value) {
    console.log(value + value * rate);
  };
};

addVAT(0.23)(100)