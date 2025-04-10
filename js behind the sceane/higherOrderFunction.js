// x is the callback function
function x() {
  console.log("hello");
}
//here y takes x()  as an argument is  higer order function
function y(x) {
  x();
}

// map , filter and reduce
const arr = [5, 1, 3, 2, 6];
/*
function double(x) {
  return x * 2;
}

function binary(x){
  return x.toString(2)
}

const output=arr.map(binary)
console.log(output);
*/
// console.log(arr.map((e)=>e*2));

//! filter

// console.log(arr.filter((e)=>e%2!=0));

//! reduce
// console.log(arr.reduce((acc,cur)=>acc+cur));

//! find the max element
function findMax(arr) {
  let max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}
// console.log(findMax(arr));

const output = arr.reduce((max, cur) => {
  if (cur > max) {
    max = cur;
  }
  return max;
}, 0);

// console.log(output);


const users=[
  {firstName:'adi',lastName:'pr',age:12},
  {firstName:'rajjo',lastName:'ksris',age:62},
  {firstName:'sud',lastName:'mon',age:52},
  {firstName:'siy',lastName:'jyo',age:42},
]

const output2=users.map(x=>x.firstName +" "+ x.lastName)
// console.log(output2);

const output3=users.reduce((acc,cur)=>{
  if(acc[cur.age]){
    acc[cur.age]=++acc[cur+age]
  }else{
    acc[cur.age]=1
  }
  return acc
},{})
console.log(output3);
