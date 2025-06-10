// async await is a new way to handle promises
// it is a more readable and easier way to handle promises

// async function getData() {
//   return "Hello World";
// }

// let data = getData();
// console.log(data);

// data.then((res) => {
//   console.log(res);
// });

const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("promise resolved");
  }, 10000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("second promise resolved ");
  }, 5000);
});

//! before async await
/*function getData(){
    p.then(res=>console.log(res))
    console.log('nameste javascript'); 
}
getData()
*/

//! after async await

const API_Url = "https://api.github.com/users/akshaymarch7";
async function handlePromise() {


  

  //! older way of handling error
  // try {
  //     const data=await fetch(API_Url)
  //     const JsonVal=await data.json()
  //     console.log(JsonVal);

  // }

  // catch (err) {
  //     console.log(err);

  // }

  const data = await fetch(API_Url);
  const JsonVal = await data.json();
  console.log(JsonVal);

}

handlePromise().catch(e=>console.log(e));
 