// var c=300
// let a=100

// if (true) {
//   let a = 10;
// console.log(a);

  // const b = 20;
//   var c = 30;
//   console.log(c);
  
// }

// console.log(a);
// console.log(b);
// console.log(c);


// function infiniteLoop(){
//   infiniteLoop()
// }

// infiniteLoop()

// function selfRecursive(count){
//   if(count<=0) return;
//   console.log('function call' ,count);
//   selfRecursive(count-1)
  
// }

// selfRecursive(6)

function example() {
  if (true) {
      var x = 10; // Function-scoped
      // let y = 20; // Block-scoped
  }
  console.log(x); // ✅ 10
  // console.log(y); // ❌ ReferenceError
}

example();
// console.log(x);
