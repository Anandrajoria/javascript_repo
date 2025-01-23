// "use strict";
const secureBooking = function () {
  let passangerCount = 0;

  return function () {
    passangerCount++;
    console.log(`${passangerCount} passangers`);
  };
};

const booker = secureBooking();
// booker()
// booker()
// booker()

// 2nd example

let f;
const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 3);
  };
};

g();
f();

