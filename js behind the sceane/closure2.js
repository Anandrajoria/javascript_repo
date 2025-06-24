function process() {
  let i = 0;
  function innerprocess() {
    i += 1;
    return i;
  }
  return innerprocess;
}

let result = process(); // this line return another function

console.log(result()); //1
console.log(result()); //2
console.log(result()); //3

// the closure poperty actually does is 
// => it remembar all those variable that are getting accesed inside your function whose scope 
// might be or not might be in your function it remembar the memory location of all those variable 
// and it is not copiying the variable instead it actually having the original value
