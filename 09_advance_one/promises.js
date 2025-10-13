const promisesOne = new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("async  task is complet");
    resolve();
  }, 1000);
});

promisesOne.then(function () {
  console.log("promise consumed");
});

new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("async task");
    resolve();
  }, 1000);
}).then(function () {
  console.log("Async 2 ");
});

const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({ username: "patel Om", gmail: "patel@gmail.com" });
  }, 1000);
});

// promiseThree.then(function (user) {
//   console.log(`user name : ${user.username}`);
//   console.log(user);
// });

// =====================promises three================================ \\
// =====================promise four================================ \\

const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;

    if (!error) {
      resolve({ username: "patel Om", email: "patel@gmail.com" });
    } else {
      reject("ERROR:Something went to wrong");
    }
  }, 1000);
});

promiseFour
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("finally : i will run always");
  });
// =====================promise four================================ \\
// =====================promise five================================ \\

const PromiseFive = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;

    if (!error) {
      resolve({ username: "javaSript", email: "patel@gmail.com" });
    } else {
      reject("ERROR:JavaScipt went to wrong");
    }
  }, 1000);
});

async function consumePromisesFive() {
  try {
    const response = await PromiseFive;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}
consumePromisesFive();

async function getUser() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    const data = await response.json();
    console.log(data);
  } catch {
    console.log("E:", error);
  }
}
getUser();
