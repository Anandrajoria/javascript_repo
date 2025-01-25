"use strict";
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for (const movement of movements) {
//   if (movement > 0) console.log(`you deposite ${movement}`);
//   else console.log(`you withdrew ${Math.abs(movement)}`);
// }

/*
you deposite 200
you deposite 450
you withdrew 400
you deposite 3000
you withdrew 650
you withdrew 130
you deposite 70
you deposite 1300
 */

//! for each
console.log('------For each--------');

movements.forEach((e) => {
  e > 0
    ? console.log(`you deposite ${e}`)
    : console.log(`you withdrew ${Math.abs(e)}`);
});
// 0:function(200)
// 1:function(450)  ...


