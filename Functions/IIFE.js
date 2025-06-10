const runOnce = function () {
  console.log("this can run again");
};

runOnce();

//IIFE
(function () {
  console.log("this will never run again");
})();
(() => console.log("this also"))();


var somethingElse=(function(nm){
  return {
    'name':nm,
    'id':123
  }
})('bob')

console.log(somethingElse);
