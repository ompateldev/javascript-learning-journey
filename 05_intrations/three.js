// for

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for (const num of numbers) {
//   if (num == 5) {
//     console.log(`number 5 is detected`);
//     continue;
//   }
//   console.log(`print  number is: ${num}`);
// }

const greetings = "hello world";

// for (const greet of greetings) {
//   if (greet == " ") {
//     console.log(`please breake line `);
//     break
//   }
//   console.log(`print character: ${greet}`);
// }

const map = new Map();

map.set("IN", "india");
map.set("USA", "united state of america");
map.set("far", "france");

// console.log(map);

for (const [key, value] of map) {
  console.log(key, ":", value);
}

// itrable su chhe
