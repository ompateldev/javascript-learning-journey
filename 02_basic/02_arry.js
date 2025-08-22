const heros = ["Iron Man", "Spider Man", "Thor", "Hulk"];
const heros2 = ["Iron Man", "Spider Man", "Thor", "Hulk"];

const villians = ["Loki", "Thanos", "Green Goblin", "Ultron"];

// heros.push(villians);

// const combined = heros.concat(villians);

// console.log(combined);

// const newCombined = [...heros , ...villians , ...heros2];
// console.log(newCombined);

const newarry_another = [
  1,
  3,
  4,
  5,
  6,
  [7, 8, 9],
  [10, 11, [22, 33, 44, 55]],
];

console.log(newarry_another.flat(Infinity)); // Accessing 7

// console.log(Array.isArray("om"));
// console.log(Array.from("om"));

let score =100
let score2 =200
let score3 =300
let score4 =400

console.log(Array.of(score, score2, score3, score4)); // Creates a new array with the given elements
