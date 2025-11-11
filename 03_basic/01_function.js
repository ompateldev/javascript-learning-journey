// function myfunction() {
//   console.log("Hello, World!");
//   console.log("om");
//   console.log("patel");
//   console.log("how are you");
// }

// // myfunction();

// function addtwonumber(a, b) {
//   let sum = a + b;
//   return sum;
// }

// let result = addtwonumber(3, 4);

// // console.log("The result is: ", result);

// // console.log("The result is: ", addtwonumber(3, 4));

// function loginuser(username) {
//   if (username === undefined) {
//     console.log("Please enter a valid username");

//     return;
//   }
//   return `${username} just logged in`;
// }

// // console.log(loginuser("om"));
// // console.log(loginuser());

// function calculatecartprice(v1, v2, ...num1) {
//   return num1;
// }

// // console.log(calculatecartprice(100, 300, 444, 555));

// const user = {
//     name: "om",
//     price : 222,
// }

// function getUserInfo(anyobject) {
//     return  console.log(`Name: ${anyobject.name}, Price: ${anyobject.price}`);
// }

// getUserInfo({
//     name: "same",
//     price: 9876543
// });

// const mynewarry = [100 , 300, 444, 555];

// function  arryfunction(newarry) {

//     return console.log(`The first element is: ${newarry}, The second element is: ${newarry[1]}`);
// }

// arryfunction(mynewarry);
// arryfunction([1,2,3,4,5,6,7,8,9]);

//======================= sheriyians ============================

// what is function
// anw = block of code

// why fuction
// anw =  jab jab aap ko aapna code turant nai chalana or apna code re-userbal rakh na ho to aap function banai ye

//how to pass parameter in function
function greetUser(name) {
  // name is parameter
  return console.log(`Hello, ${name}! Welcome to our website.`);
}

// how to call function and pass argument
// greetUser("om patel"); // "om patel" is argument

// how to get return value from function

greetUser("Om Patel"); // Hello, Om Patel! Welcome to our website.
greetUser("juhee , nidhi"); // Hello, juhee , nidhi! Welcome to our website.

function name(params) {
  // function statement
}
// function expression
const myfunction = function () {};

//anomous function
//  function() {
// }

//fat arrow function
const mynewfunction = () => {};

// fat arrow function with parameter
const mynewfunction2 = (param1) => {};
// fat arrow function with return
const mynewfunction3 = (param1) => {
  return param1;
};
// fat arrow function with implicit return
const mynewfunction4 = (param1) => param1;

// arrow function
() => {};

// function implicit return and explicit return
const add = (a, b) => a + b; // implicit return

const multiply = (a, b) => {
  return a * b; // explicit return
};

//rest function
function number(a, s, d, ...args) {
  console.log(args);
}

number(1, 2, 3, 4, 5, 6, 7, 8, 9);

// hosting in function
console.log(hoistingFunction(5, 10)); // 15

function hoistingFunction(a, b) {
  return a + b;
}
// hosting ae concept hai jo function or variable ko upar le jata hai

//iife = immediately invoked function expression

(function () {
  console.log("This is an IIFE function");
})(); // ye function turant chal jata hai





/////////////////////////  practice  ////////////////////////

/////////////////////////////
// Task 1
function sum(...number) {
  return number.reduce((acc, curr) => acc + curr, 0);
}

console.log(sum(1, 2, 3));

console.log(sum(10, 20));
console.log(sum(4, 5, 6, 7, 8));

// Task 2 — Remove First Item, Baaki Return

function user(a, b, ...add) {
  return console.log(`this add ${add}`);
}

user("Om", 20, "Developer", "Gujarat");
user("Nidhi", 25, "Designer", "Mumbai", "India");
user("Juhee", 22, "Manager", "Bangalore", "Karnataka", "India");
