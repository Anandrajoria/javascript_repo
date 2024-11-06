// let's understand arrow function and this keyword


const user = {
  username: "adi",
  price: 999,
  welcomeMess: function () {
    console.log(`${this.username}, welcome to my empire`);  /*this keyword refers to current context and here current context is user block */
    // console.log(this);
    
  },
};

// user.welcomeMess()                //adi, welcome to my empire
// user.username='kris'
// user.welcomeMess()                //kris, welcome to my empire   .. it is because current context changes form adi to kris



// console.log(this);              //{} .. In the top-level global scope (i.e., directly inside a script or module), this is not the global object (global). Instead, this in the global scope in Node.js refers to an empty object {}.
// This differs from the browser, where this at the top level would refer to the window object.


// !without strict mode
function chai(){
    console.log(this);   // global   ..regular function called from the global scope refers to the global object in Node.js, which is global.
}
// chai()

//! with strict mode
function chai2(){
    // "use strict"
    console.log(this);   // undefined   ..This is because, in strict mode, JavaScript prevents the default binding of this to the global object when a function is called in the global scope. 
}
// chai2()



const chai3=()=>{
    "use strict"                       //"use strict"; has no effect on this in arrow functions, as this is lexically bound.
    console.log(this); 
}
// chai3()                             //{}


const obj = {
    value: 42,
    regularFunc: function() {
      console.log("regularFunc `this`:", this); // `this` refers to `obj`
    },
    arrowFunc: () => {
      console.log("arrowFunc `this`:", this);  // `this` refers to the lexical scope, likely `window` or `{}` in Node.js
    }
  };
  
//   obj.regularFunc(); // regularFunc `this`: obj
//   obj.arrowFunc();   // arrowFunc `this`: global object or `{}` in Node.js


const arrowFunc = () => {
    console.log(arguments); // `arguments` is not defined here
  };
  
  arrowFunc(1, 2, 3); // Error: arguments is not defined