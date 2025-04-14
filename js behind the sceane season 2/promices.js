//! how promises are made

// 1
const promise1 = new Promise(function (resolve, reject) {
  // do an async tasks
  setTimeout(function () {
    console.log("async task is complete");
    resolve();
  }, 1000);
});

promise1.then(function () {
  console.log("promiced consumed");
});

const promise2 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("async task 2 is complete");
    resolve();
  }, 1000);
}).then(function () {
  console.log("async 2 resolved");
});

const Promise3 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({ username: "chai", Email: "adi@234.com" });
  }, 1000);
});

Promise3.then(function (user) {
  console.log(user);
});

const Promise4 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = false;
    if (!error) {
      resolve({ username: "adi", passward: "123" });
    } else {
      reject("ERROR SOMETHING WENT WRONG");
    }
  }, 1000);
});

Promise4.then((user) => {
  console.log(user);
  return user.username;
})
  .then((username) => {
    console.log(username);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    console.log("finally the promise is resolved or rejected");
  });

const promise5 = new Promise((resolve, reject) => {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({ username: "javascrrpt", passward: "123" });
    } else {
      reject("ERROR JAVASCRIPT WENT WRONG");
    }
  }, 1000);
});

async function consumePromise5() {
  try {
    const response = await promise5;
  console.log(response);
  
  } catch (error) {
    console.log(error);
    
  }
}
consumePromise5()