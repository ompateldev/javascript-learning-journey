const user = {
  name: "John",
  price: 999,

  welcomeMessage: function () {
    console.log(`${this.name} , welcome to website`);
  },
};

// user.welcomeMessage();
// user.name = "Alice";
// user.welcomeMessage();

function omchaie() {
  let user = "om";
  console.log(this.user);
}
// omchaie();

const addtwo = (num1, num2) => {
  return num1 + num2;
};
console.log(addtwo(5, 10));
