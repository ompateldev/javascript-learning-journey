let a = 10;
// const b = 20;
var c = 3000;

if (true) {
  let a = 10;
  const b = 20;
  var c = 30;

  // console.log("inner:" ,a);
}

// console.log(a);
// console.log(b);
// console.log(c);

function one() {
  const username = "om";
  function two() {
    const website = "example.com";
    console.log(username);
  }

  // two();
}

// one();


if(true) {
  const username = "om";

  if(username === "om") {
    const website = "example.com";
    console.log(username + website);
  }
  // console.log(website);
}
// console.log(username);
