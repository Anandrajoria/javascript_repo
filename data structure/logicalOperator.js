const res1 = {
  name: "antima",
  //   numGuest: 20,
  numGuest: 0,
};
const res2 = {
  name: "shubhi",
  owner: "adi",
};

// res2.numGuest=res1.numGuest || 10;
// console.log(res2);  //*{ name: 'shubhi', owner: 'adi', numGuest: 10 }

// ! OR assignment operator
// res1.numGuest||= 10
// res2.numGuest||= 10

// ! nullish assignment operator
res1.numGuest ??= 10;
res2.numGuest ??= 10;

//! AND assignment operator

// res2.owner=res2.owner && '<ANONYMOUS>'
// res1.owner=res1.owner && '<ANONYMOUS>'
res2.owner&&= '<ANONYMOUS>'
res1.owner&&= '<ANONYMOUS>'
console.log(res1);
console.log(res2);
