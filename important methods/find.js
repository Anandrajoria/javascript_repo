'use strict'
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const find=movements.find((mov)=>mov<0)
console.log(find);
// find method only return to first occurence of desired element form an array


for(const val of movements){
    if(val<0){
        console.log(val);
    }
}
