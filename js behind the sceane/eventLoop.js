/*console.log("start");

setTimeout(function cbT() {
  console.log("cb set time out");
}, 5000);

fetch("https://api.netflix.com").then(function cbF() {
  console.log("CB netflix");
});
console.log("end");
*/

/*
function main() {
  console.log("a");
  setTimeout(function display() {
    console.log("b");
  }, 0);
  console.log('c');
  
}
main();
*/

function main() {
  console.log("a");

  setTimeout(function exec() {
    console.log("b");
  }, 0);

  runWhileLoopForNSecond(3);
  console.log("c");
}

main()

function runWhileLoopForNSecond(sec){
  let start=Date.now() ,now=start

  while(now-start < (sec*1000)){
    now=Date.now()
  }
}

//So the delay argument in setTimeout() does not guarantee the start of execution after timer finishes the delay. It serves as a minimum time for the delay part.
