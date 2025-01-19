const airlines = "Tap air protugal";
const plane = "A2E30";
// console.log(plane.length);  //5

// console.log(airlines.indexOf('r'));  //6

// console.log(airlines.slice(4,7));  //air
// slice method include 1ts parameter and exclude 2nd parameter

// console.log(new String('adi'));
// console.log(typeof new String('adi')); //object

//! string methods

// console.log(airlines.toLowerCase());   //? tap air protugal
// console.log(airlines.toUpperCase());   //? TAP AIR PROTUGAL

const passenger = "jOnAs";
const passengerLower = passenger.toLowerCase();
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
// console.log(passengerCorrect);   //!  Jonas

// comparing email
const email = "adi@gmail.com";
const loginEmail = "   Adi@gmail.com  \n";

const normalLoginEmail = loginEmail.toLowerCase().trim();
// console.log(normalLoginEmail);   //!adi@gmailcom

// console.log(email === normalLoginEmail);  //!true

const priceUS='23234$'
const priceGB=priceUS.replace('$','@').replace(',', '.')
console.log(priceGB);


