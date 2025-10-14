const userDetails = {
  userName: "patel om",
  email: "patel@gmail.com",
  loginCount: 32,

  getUserdetails: function () {
    console.log(`${this.userName}`);
  },
};

console.log(userDetails.userName);
console.log(userDetails.getUserdetails());

function user(username, email, isLoggedIn) {
  this.username = username;
  this.email = email;
  this.isLoggedIn = isLoggedIn;

  this.greeting = function () {
    console.log(`${username}`);
  };
  return this;
}

const newuser = new user("patel om ", "op@gmail.com", true);
const newusertwo = new user(" om ", "onmne@gmail.com", false);
console.log(newuser.greeting());
