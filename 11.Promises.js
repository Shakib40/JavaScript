// Promises are used to handle asynchronous operations in JavaScript. They are easy to manage when dealing with multiple asynchronous operations.
// Earlier callbacks were used to handle asynchronous operations; But promises provide a better way of doing it.

// - **Benefits of Promises**
//     1. Improves Code Readability
//     2. Better handling of asynchronous operations
//     3. Better flow of control definition in asynchronous logic
//     4. Better Error Handling


// - **A Promise has four states:**
//     1. **fulfilled**: Action related to the promise succeeded
//     2. **rejected**: Action related to the promise failed
//     3. **pending**: Promise is still pending i.e. not fulfilled or rejected yet
//     4. **settled**: Promise has fulfilled or rejected
    

// Syntax :

// let promise = new Promise(function(resolve, reject){
//     //do something
//            resolve(`success`);
//            reject(`error`);
// });


// General Definition : A promise is a commitment by someone to do or not do something

// Why Promises in Js?

// Sometimes a piece of code will take ‘x’ seconds to execute.
// Depending on the it, we have other piece of code.

// This other piece of code is dependent on first piece of code. So, it waits until first piece of code is done executing

// Promises have consequences.

// 1. They will be fullfilled.
// 2. They will not be fullfilled.
// 3. They will be in the process.


// ### Async Await

// An `async` function is a function declared with the `async` keyword, and the `await` keyword 
//is permitted within it. The `async` and `await` keywords enable asynchronous, promise-based 
//behavior to be written in a cleaner style, avoiding the need to explicitly configure promise 
//chains.

// async function test() {
//     let promise = new Promise(function (resolve, reject) {
//       setTimeout(function () {
//         resolve("done!");
//       }, 1000);
//     });
  
//     let result = await promise;
  
//     console.log(result);
//   }
  
//   test();