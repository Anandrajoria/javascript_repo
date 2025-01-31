const data = [5, 2, 4, 1, 15, 8, 3];

const valcAvgHumanAge = (age) => {
  const humanAge = age
    .map((age) => (age <= 2 ? 2 * age : 16 + age * 4))
    .filter((age) => age >= 18)
    .reduce((acc, age, i, arr) => acc + age / arr.length, 0);
  return humanAge;
};
console.log(valcAvgHumanAge(data));
