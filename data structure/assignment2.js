const gameEvent = new Map([
  [17, "goal"],
  [36, "substitution"],
  [47, "goal"],
  [61, "substitution"],
  [64, "yellow card"],
  [69, "red card"],
  [70, "substitution"],
  [72, "substitution"],
  [76, "goal"],
  [80, "goal"],
  [92, "yellow card"],
]);
// console.log(gameEvent.values());

const events = [...new Set(gameEvent.values())];
console.log(events);

gameEvent.delete(64)

console.log(`an game event on an average every ${90/gameEvent.size} minutes`);
