function multipaby5(num) {
  return num * 5;
}

multipaby5.power = 2;

console.log(multipaby5(5));
console.log(multipaby5.power);
console.log(multipaby5.prototype);

function CreateUser(username, score) {
  this.username = username;
  this.score = score;
}

CreateUser.prototype.increment = function () {
  this.score++;
};

CreateUser.prototype.printMe = function(){
  console.log(`username: ${this.username}, score: ${this.score}`);
}

const chai =  CreateUser("chai", 3);
const tea =  CreateUser("tea", 5);
