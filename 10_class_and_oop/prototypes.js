// let myname = 'Alice     ';

// console.log(myname.trueLength); // undefined
// console.log(myname.trim().length);

let herosName = ["thor", "spiderman"];

let herosPower = {
  thor: "hamer",
  spiderman: "sling",

  getspiderPower: function () {
    console.log(`spidy man power is ${this.spiderman}`);
  },
};

Object.prototype.om = function () {
  console.log(`om is all of objects`);
};

Array.prototype.heyom = function () {
  console.log("hey om this side ");
};

// herosPower.om();
// herosPower.heyom();
// herosName.heyom();

const user = {
  name: "om",
  email: "om@example.com",
};

const Teacher = {
  makVideo: true,
};
const TeachSupport = {
  isAvailable: false,
};

const TeachingSupport = {
  makeAssignment: "js assignment",
  fulltime: true,
  __proto__: TeachSupport,
};

// TeachingSupport.__proto__ = TeachSupport;

let StringOne = "omkar    ";

// console.log(StringOne.trim().length);

String.prototype.truLenth = function () {
  console.log(`${this.length}`);
  console.log(`true lenth is ${this.trim().length}`);
};

StringOne.truLenth();
