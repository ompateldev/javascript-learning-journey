// const tinderuser = new Object();
// const tinderuser ={
//     name: "om",
//     age: 18,
//     email: "om@example.com",
//     fullname: {
//         userfullname:{
//             first: "Om",
//             last: "Patel"
//         }
//     }
// }

const tinderuser = {}
tinderuser.name = "om";
tinderuser.age = 18;
tinderuser.email = "om@example.com";
// console.log(tinderuser.fullname.userfullname.first);

const obj1 = { 1 :"value1", 2: "value2"}
const obj2 = { 3 :"value3", 4: "value4"}
const obj3 = { 5 :"value5", 6: "value6"}

// const obj4 = Object.assign({}, {obj1, obj2, obj3});

const obj4 = {...obj1, ...obj2, ...obj3};
// console.log(obj4);


const user = [
    {
        id: 1,
        name: "Om Patel",
        age: 18,
        email: "om@example.com"
    },
    {
        id: 2,
        name: "Om ",
        age: 18,
        email: "o@example.com"
    },
    {
        id: 3,
        name: "Patel",
        age: 18,
        email: "om@example.com"
    },
]

// console.log(user[0].email);
console.log(tinderuser);
console.log(Object.keys(tinderuser));
console.log(tinderuser.hasOwnProperty("age"));


const course = {
    title: "JavaScript Basics",
    duration: "3 weeks",
    instructor: "John Doe"
};


// console.log(course.title);

const {instructor : inst , title : tit , duration : dur}= course;
console.log(inst);
console.log(tit);
console.log(dur);
