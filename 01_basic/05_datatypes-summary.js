// Primitive Types (Call by Value)

// Non-Primitive / Reference Types (Call by Reference)

//String
let name = "Om";

// Number — integers और floating point दोनों हो सकते हैं
let age = 22;
let price = 22.5;


// Boolean — true/false values
const isLoggedIn = true;

// Null — intentionally empty value (zero या empty string नहीं)
let temperature = null;

//Undefined — variable declared but not assigned
let state;
console.log(state);


// Symbol — unique identifiers बनाने के लिए

const id = Symbol('123');
const anotherid = Symbol('123');

console.log(id === anotherid);


// BigInt — बहुत बड़े integers के लिए
const bigNumber = 123456789012345678901234567890n;


// Non-Primitive / Reference Types

//Array
let user = ['om', 'om@gmail.com', 'om123'];


//object

let userDetails = {
     name: "Om",
     age: 22,
     isLoggedIn: true,
     temperature: null,
     state: undefined,
     id: Symbol('123'),
     bigNumber: 123456789012345678901234567890n,
}


//function
const greet = function () {
     console.log("Hello World");
};


console.log(typeof "Hello"); // string
console.log(typeof 123);     // number
console.log(typeof null);    // object (JS quirk)
console.log(typeof undefined); // undefined
console.log(typeof Symbol());  // symbol
console.log(typeof 123n);      // bigint


// **************************************************//

// Stack (primitive) and Heap (reference)

let a = 10;

let b = a;
b = 20;

console.log(a);
console.log(b);


let userOne = {
     email: "user@gmail.com",
     upi: "user@ybl"
}

let userTwo = userOne;

userTwo.email = "user2@gmail.com";

console.log(userOne.email);