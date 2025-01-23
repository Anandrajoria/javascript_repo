const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};
const greeterHey = greet("hey");
// greeterHey('jonas')

/*const sum = function (operation) {
  if (operation == "addition") {
    return function (a, b) {
      console.log(a + b);
    };
  } else if (operation == "subtraction") {
    return function (a, b) {
      console.log(a - b);
    };
  }else{
    return function(a,b){
        console.log(a*b);

    }
  }
};
const add = sum("addition");
add(1, 2);

const sub = sum("subtraction");
sub(3, 2);

const product=sum()
product(4,4)

//! sum() top function
//! (4,4) inner function
// sum()(4, 4);
*/

const sum = (operation) => {
  if (operation == "addition") {
    return (a, b) => a + b;
  } else if (operation == "substraction") {
    return (a, b) => a - b;
  } else return (a, b) => a * b;
};


console.log(sum()(4, 4));
console.log(sum('addition')(4, 4));
console.log(sum('substraction')(4, 4));
