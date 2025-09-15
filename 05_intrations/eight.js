

let newarray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let reduseNumber = newarray.reduce( function (accu , currval) {
    console.log(`acuu value : ${accu} and curr value : ${currval}`);
    
    return accu + currval;
} , 0   )

console.log(reduseNumber);
