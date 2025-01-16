// 'use strict';

function calcAge(birthYear) {
  console.log(2037 - birthYear);
  console.log(this);
}
// calcAge(1991)

const calcAgeArrow = (birthYear) => {
  console.log(2037 - birthYear);
  console.log(this);
};
// calcAgeArrow(1993)

const jonas = {
  year: 1991,
  calcAge: function () {
    console.log(this.year);
  },
};
jonas.calcAge();

const matilda={
    year:2017,
}

matilda.calcAge=jonas.calcAge

// console.log(matilda);

matilda.calcAge()

const a=matilda.calcAge;
console.log(a());  // error because it is regular function
