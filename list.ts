const doors = ["red", "green", "blue"];

// const doorAndCoinPossibilities = run(doors, (door) => {
//   return [door + " heads", door + " tails"];
// });

[
  "red heads",
  "red tails",
  "green heads",
  "green tails",
  "blue heads",
  "blue tails",
];

const doorAndCoinPossibilities = doors.flatMap((door) => {
  return [door + " heads", door + " tails"];
});

console.log(doorAndCoinPossibilities);

// design pattern chain operations
