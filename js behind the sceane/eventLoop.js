/*console.log("start");

setTimeout(function cbT() {
  console.log("cb set time out");
}, 5000);

fetch("https://api.netflix.com").then(function cbF() {
  console.log("CB netflix");
});
console.log("end");
*/

function main() {
  console.log("a");
  setTimeout(function display() {
    console.log("b");
  }, 0);
  console.log('c');
  
}

main();
