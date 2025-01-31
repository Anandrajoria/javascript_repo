"use strict";
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const deposite = movements.filter((mov) => {
  return mov > 0;
});
console.log(deposite);
console.log(movements);

const withdraws = movements.filter((e) => {
  return e < 0;
});
console.log(withdraws);
