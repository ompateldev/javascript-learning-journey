let useremail = [];

// if (useremail) {
//   console.log("email is present");
// }else {
//     console.log("email is not present");
// }

// falsy values
// false , 0 , "", null, undefined, NaN

//truthy values
// true, {}, [], "hello", 1, -1, 3.14, -3.14

// Nullish coalescing operator (??)

let val1;
// let val2 = 5 ?? "hello";
// let val2 = null ?? 5;
// let val2 = undefined ?? 5;
let val2 = null ?? 33 ?? 5;

console.log(val2);

// Terniary operator

// condition ? true : false

let price = 1000;

price <= 1200
  ? console.log("price is greater than or equal to 1200")
  : console.log("price is less than 1200");
