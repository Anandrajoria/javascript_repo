"use strict";
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const eurToUsd = 1.1;
const movementsUsd = movements.map((mov) => mov * eurToUsd);

// console.log(movements);
// console.log(movementsUsd);

const movUsd = [];
for (const mov of movements) {
  movUsd.push(mov * eurToUsd);
}
// console.log(movUsd);
// console.log(movements);

const movementArray=movements.map((mov,i)=>{
    return {[i]:mov}
})
console.log(movementArray);
