"use strict";
//! Map
const currencies = new Map([
  ["USD", "united state dollar"],
  ["EUR", "euro"],
  ["GBP", "pound sterling"],
]);

currencies.forEach((curVal, key, map) => {
  console.log(`${key}:${curVal}`);
});

// ! set
const UniqueCurrencies = new Set(["USD", "GBP", "USD", "EUR", "EUR"]);
console.log(UniqueCurrencies);

UniqueCurrencies.forEach((curVal,_,map)=>{
    console.log(`${curVal}:${curVal}`);
    
})