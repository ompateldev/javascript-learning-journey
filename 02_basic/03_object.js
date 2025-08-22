const mySymbol = Symbol("mySymbol");

const myuser = {
  name: "om",
  age: 18,
  [mySymbol]: "keyone",
  email: "om@example.com",
  location: "India",
  isLoggedIn: true,
};

console.log(myuser.name); // Accessing property using dot notation
console.log(typeof myuser[mySymbol]); // Accessing property using bracket notation

myuser.email = "newemail@example.com";
Object.freeze(myuser);

console.log(myuser);

myuser.email = "ombannabulet@example.com";

console.log(myuser);

