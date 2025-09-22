console.log('Hello, world!');

let s1 = "Hitesh";


let s2 = s1;        // value copy
s2 = s2.toUpperCase();
console.log(s1);    // "Hitesh" (original same)
console.log(s2);    // "HITESH"





const person = { name: "Om", age: 20 };
person.age = 21; // ✅ allowed
console.log(person); // { name: "Om", age: 21 }

// person = { name: "Patel" }; // ❌ Error (reassign नहीं कर सकते)
console.log(person.age);
