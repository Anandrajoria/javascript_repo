//map = data ia stored in key values pairs
// here keys can be of any type

const rest = new Map();
rest.set("name", "pizzaa");
rest.set(1, "italy");
// console.log(rest.set(2, "protugal")); //* { 'name' => 'pizzaa', 1 => 'italy', 2 => 'protugal' }

rest
  .set("categories", ["pasta", "pizza", "pizza", "rissoto", "pizza"])
  .set("open", 11)
  .set("close", 23)
  .set(true, "we are open :)")
  .set(false, "we are closed:(");

// console.log(rest.get("categories"));

const time = 21;
// console.log(rest.get(time > rest.get("open") && time < rest.get("close"))); //we are open :)

// console.log(rest.has("categories"));
const arr = [1, 2];
rest.set(arr, "test");
// rest.delete(2)
// console.log(rest);

// console.log(rest.get(arr));

// itertion
const questions = new Map([
  ["question", "best programming language"],
  [1, "c"],
  [2, "java"],
  [3, "cpp"],
  [4, "python"],
  ["correct", 3],
  [true, "correct"],
  [false, "try again"],
]);
// console.log(questions);

console.log(questions.get("question"));

for (const [key, value] of questions) {
  if (typeof key == "number") {
    console.log(`${key}:${value}`);
  }
}
