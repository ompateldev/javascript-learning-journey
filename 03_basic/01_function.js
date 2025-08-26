function myfunction() {
  console.log("Hello, World!");
  console.log("om");
  console.log("patel");
  console.log("how are you");
}

// myfunction();

function addtwonumber(a, b) {
  let sum = a + b;
  return sum;
}

let result = addtwonumber(3, 4);

// console.log("The result is: ", result);

// console.log("The result is: ", addtwonumber(3, 4));

function loginuser(username) {
  if (username === undefined) {
    console.log("Please enter a valid username");

    return;
  }
  return `${username} just logged in`;
}

// console.log(loginuser("om"));
// console.log(loginuser());

function calculatecartprice(v1, v2, ...num1) {
  return num1;
}

// console.log(calculatecartprice(100, 300, 444, 555));


const user = {
    name: "om",
    price : 222,
}

function getUserInfo(anyobject) {
    return  console.log(`Name: ${anyobject.name}, Price: ${anyobject.price}`);
}

getUserInfo({
    name: "same",
    price: 9876543
});


const mynewarry = [100 , 300, 444, 555];

function  arryfunction(newarry) {

    return console.log(`The first element is: ${newarry}, The second element is: ${newarry[1]}`);
}


arryfunction(mynewarry);
arryfunction([1,2,3,4,5,6,7,8,9]);
