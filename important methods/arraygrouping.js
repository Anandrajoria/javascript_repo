"use strict";
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const groupedMovements = Object.groupBy(movements, (movement) =>
  movement > 0 ? "deposite" : "withdraw"
);
console.log(groupedMovements);


// Object.groupBy method takes two argumenst one is array and another is callback function
// in callback function it takes keys so that it can group by that name based on condition

