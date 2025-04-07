/*function x() {
  var i = 1;
  setTimeout(function () {
    console.log(i);
  }, 1000);
  console.log("asdfas");
}
x();
*/

/*function x() {
  for (var i = 1; i <= 5; i++) {
    function close(i) {
      setTimeout(function () {
        console.log(i);
      }, i * 1000);
    }
    close(i)
  }

  console.log("adi");
}
x();
*/

function outest() {
  let c=20
  function outer(b) {
    function inner() {
      console.log(a, b,c);
    }
    // let a = 10;
    return inner;
  }
  return outer
}
let a=100

outest()("hellow")();
