"use strict";
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

//include method check for equality 
console.log(movements.includes(-130));


//some mehtod also took condition for finding element
const anyDoposite = movements.some((mov) => mov > 500);
console.log(anyDoposite);
