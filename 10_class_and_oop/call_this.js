function setUsername(username) {
  this.username = username;
}

function createUser(usernaem, email, password) {
  setUsername(usernaem);
  this.email = email;
  this.password = password;
}

let callthis = new createUser("om", "om@gmail.com", "234");

console.log(callthis);
