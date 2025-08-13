const name = "om";
const phoneNo = 9876543210;

// console.log(name + " " + phoneNo);

console.log(`my name is ${name} and my phone number is ${phoneNo}`);



const game = new String("ompatel_patel");



console.log(game.length);
console.log(game[0]);
console.log(game.__proto__);
console.log(game.toUpperCase());
console.log(game.toLowerCase());
console.log(game.charAt(2));
console.log(game.indexOf("o"));

const newString = game.substring(0, 3);
console.log(newString);

const newString2 = game.slice(-7, 4);
console.log(newString2);


const newString3 = "     om     ";
console.log(newString3);
console.log(newString3.trim());


const url ="https://ompatel.com/ompatel%20isom";

console.log(url.replace("%20", "_" ));

console.log(url.includes("xxx"));

console.log(game.split("_"));








