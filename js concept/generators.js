//generators in javascript

function* getChatMessage(message) {
  for (let msg of message) {
    yield msg;
  }
}

const messages = [
  "Hi!",
  "How are you?",
  "I'm doing well.",
  "What about you?",
  "Let's meet tomorrow.",
];

const chatGenerator = getChatMessage(messages);

// console.log(chatGenerator.next().value);
// console.log(chatGenerator.next().value);
// console.log(chatGenerator.next().value);
// console.log(chatGenerator.next().value);
// console.log(chatGenerator.next().value);

function* greet() {
  let name = yield "what is your name?";
  yield `hello, ${name}`;
}

let gen = greet();
// console.log(gen.next().value);
// console.log(gen.next("aditya").value);

//! errors in generators
function* test() {
  try {
    yield 1;
  } catch (e) {
    console.log("catch the error:", e);
  }
}

const gene = test();

// if (!gene.next()) {
//   gene.throw(new Error("person with money never bows to anybody"));
// }else{
// console.log(gene.next());
// }


//! use cases 
// ?Lazy Iteration (on-demand data)

function* countUpto(n) {
  for (let i = 1; i <= n; i++) yield i;
}


// ?Custom Infinite Sequences
function* infinite() {
  let i = 0;
  while (true) yield i++;
}


// ?sync Generators (with for await)
async function* fetchChunks() {
  yield await fetch();
}


// ! delagating with yield

function* inner(){
    yield 'A'
    yield 'B'
}

function* outer(){
    yield 'start'
    yield* inner()
    yield 'end'
}

let main=outer()
// console.log(main.next());
// console.log(main.next());
// console.log(main.next());
// console.log(main.next());
// console.log(main.next());



function* range(start,end){
    for(let i=start;i<=end;i++){
        yield i
    }
}

for(let num of range(1,5)){
    console.log(num);
    
}