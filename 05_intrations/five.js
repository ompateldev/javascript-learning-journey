const mynewarry = ["js", "cpp", "py", "ruby", " java"];

// mynewarry.forEach(function (mynewarry) {
//   console.log(mynewarry);
// });

// mynewarry.forEach((item)=>{
//     console.log(item);

// })

function coding(params) {
  console.log(params);
}
mynewarry.forEach(coding);

mynewarry.forEach((item, index, arry) => {
  console.log(
    `The item is: ${item}, The index is: ${index}, The arry is: ${arry}`
  );
});
