// const mynewarry = ["js", "cpp", "py", "ruby", "java"];

// const result = mynewarry.forEach((item) => {
//   console.log(item);
//   return item;
// });
// console.log(result); // undefined

const newNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,11,12,13,14,15,16,27,28];

let filterNumber = newNumber.filter( (nums) => {return nums > 5} );

filterNumber = newNumber.filter( (nums) => {
    nums % 2 == 0 && nums >=2
    return
    } )

console.log(filterNumber);

