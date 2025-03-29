function a() {
  let b = 10;
  c();
  function c() {
    console.log(b);
  }
}
a();
// console.log(b);
