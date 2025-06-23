//! recursion: when function call itself
// otherwise it will get called for infinite time
// if a function call itself then there must be an end point

// for(let i=1;i<=5;i++){
//     console.log('hello');
// }

function temp(n) {
  if (n == 0) return;
  console.log("hello  world");
  // temp(n--) //? post decrement
  temp(--n);
}
// temp(5)

function temp2(n) {
  if (n == 0) return;
  temp2(n - 1);
  console.log(n);
}
// temp2(5)

function recursiveSum(n) {
  if (n == 1) return n;
  return n + recursiveSum(n - 1);
}
// console.log(recursiveSum(5))

