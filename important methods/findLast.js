'use strict'

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const lastWithdraw=movements.findLast(mov=>mov<0)
console.log(lastWithdraw);

//this is just opposite of find method it look for the variable form the last of array

const lastWithdrawIndex=movements.findLastIndex(mov=>mov>2000)

console.log(`your latest large movement was ${movements.length-1-lastWithdrawIndex} movements ago`);
