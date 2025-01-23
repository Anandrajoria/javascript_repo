"use strict";
const flight = "LH234";
const aditya = {
  name: "nick willims",
  passport: 3452463543,
};
const checkIn = function (flightNum, passanger) {
  flightNum = "HJ789";
  passanger.name = "Mr," + passanger.name;

  if (passanger.passport === 3452463543) {
    console.log("checkin");
  } else {
    console.log("wrong passport");
  }
};
// checkIn(flight, aditya);
// console.log(flight);
// console.log(aditya);77

const newPassport = function (person) {
  console.log((person.passport = Math.trunc(Math.random() * 1000000000)));
};
newPassport(aditya);
checkIn(flight, aditya);
