// // console.log('Hello, world!');

// // let s1 = "Hitesh";

// // let s2 = s1;        // value copy
// // s2 = s2.toUpperCase();
// // console.log(s1);    // "Hitesh" (original same)
// // console.log(s2);    // "HITESH"

// // const person = { name: "Om", age: 20 };
// // person.age = 21; // ✅ allowed
// // console.log(person); // { name: "Om", age: 21 }

// // // person = { name: "Patel" }; // ❌ Error (reassign नहीं कर सकते)
// // console.log(person.age);

// // console.log("Start");

// // setTimeout(() => console.log("Timeout"), 0);

// // Promise.resolve().then(() => console.log("Promise"));

// // console.log("End");

// // console.log("A");

// // setTimeout(() => {
// //   console.log("B");
// // }, 0);

// // Promise.resolve().then(() => {
// //   console.log("C");
// // });

// // console.log("D");

// // queueMicrotask(() => {
// //   console.log("E");
// // });

// // setTimeout(() => {
// //   console.log("F");
// // }, 0);

// // // A ,  D , C , E , B  , F

// function outer(name) {
//   this.name = name;

//   function inner() {
//     this.age = 20;
//   }

//   inner();
// }

// const user = new outer("omkar");
// console.log(user);

// user = new inner();
// console.log(user);


// const string = "World o";

// console.log(string.length);
// console.log(string.trim().length);

// const text = "Hello   world   again";
// const result = text.split(/\s+/);
// console.log(result);
// console.log(result.length);

// //[Hello,'world',"again"]

// const text1 = "A quick   brown fox";
// const result1 = text1.replace(/\s+/g, "");
// console.log(result1.length);


const text = "Hi! How are you? I am fine.";
const result = text.split(/[.!?]+/).filter(s => s.trim().length > 0);
console.log(result.length);

