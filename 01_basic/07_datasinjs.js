console.log("Hello, World!");

// let newDate = new Date();

console.log(newDate);
console.log(newDate.toString());
console.log(newDate.toDateString());
console.log(newDate.toLocaleDateString());

console.log(typeof newDate);

// let createDate = new Date("2023-01-01");
let createDate = new Date(2023, 0, 1 , 2, 30); // Months are 0-indexed in JavaScript

console.log(createDate.toLocaleString());

let newDate = new Date();

console.log(newDate());
