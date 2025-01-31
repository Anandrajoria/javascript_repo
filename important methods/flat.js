"use strict";
const movements = [200, [450, [-400, 3000, [-650]], -130], 70, [1300]];
console.log(movements.flat());

// flatmap is just combination of flat and map methods
const movements2 = movements.flatMap(el => el*2);
console.log(movements2);
