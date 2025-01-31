"use strict";
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const eurToUsd = 1.1;
//pipeline
const totalDeposite = movements
  .filter((mov) => mov > 0)
  .map((mov) => mov * eurToUsd)
  .reduce((acc, cur) => acc + cur, 0);
console.log(totalDeposite);
