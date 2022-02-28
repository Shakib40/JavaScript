// In javascript function are first class objects
// just likee an object  , a function can be passed as an arguments to a function 
// a function can also be returned as values from other funtions

// function greet(name){
//     console.log(`Hello ${name}`)
// }

// function greetName(grretFn){
//    const name = 'Shakib Jilani'
//    grretFn(name)
// }
// greetName(greet)

// Any function that is passed as an argument to another function is called a callback function
// in javascript

// funtions which accept a function as an argument or return a function is called a callback 
// high order function


// function Area(length , breadth) {
//     console.log("Area:", length*breadth);
// }

// function higherOrderFunction(callback) {
//   const length = 20
//   const breadth = 30
//   callback(length, breadth)

// }
// higherOrderFunction(Area)


// Synchronous callbacks
// A callback which is executed immediately is called a synchronous function

// function Area(length , breadth) {
//     console.log("Area:", length*breadth);
// }

// function higherOrderFunction(callback) {
//   const length = 20
//   const breadth = 30
//   callback(length, breadth)
// }
// higherOrderFunction(Area)

// let numbers = [8, 9, 3, 4, 5 , 6, 7]
// const sorts =  numbers.sort( (a, b) => a-b)
// console.log(sorts);

// const maps =  numbers.map ( n => n * 10 )
// console.log(maps);

// const filtered =  numbers.filter ( n => n % 2 === 0)
// console.log(filtered);


// Asynchronous function callbacks
// an asynchronous functions is a callback that is often used to continue
// or resume code execution after an asynchronous operation has completed

// Callbacks are used to delay the execution of a function until a particular
// time or event has occured








