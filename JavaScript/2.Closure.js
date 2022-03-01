//A Closure is the combination of function which bundled together with references to its surrounding state.
// closures are created every time a function is created at function creation time


// function outer () {
//     let counter = 0;
//     function inner () {
//         counter++;
//         console.log(counter);
//     }
//     inner()
// }
// outer()
// outer()
// outer()


// function outer () {
//     let counter = 0;
//     function inner () {
//         counter++;
//         console.log(counter);
//     }
//     return inner
// }
 
// const fn = outer()

// fn()
// fn()
// fn()




// Parent scope

// let b = 3;
// function impureFun(a){
//     return a + b;
// }
// b = 5

// console.log(impureFun(1));

// b =4;
// console.log(impureFun(3));

// Lexical Environment
// const state = 'world';

// // Function
// function callMe(){
//     return `Hello ${state}`
// }
// console.log(callMe());


// function pureFun(a,b){
//     return a + b;
// }

// console.log("Pure",pureFun(4,6));
// console.log("Pure",pureFun(4,6));
// console.log("Pure",pureFun(4,6));


// but this is not closure


// function outer(){
// var a= 0;
// function inner(){
// console.log(a++);
// }
// inner();
// }

// outer();
// outer();
// outer();



// function outer(){
// var a= 71;
// function inner(){
// console.log(a++);
// }
// return inner();
// }
// outer();
// outer();
// outer();


// function outer(outer){

// return function inner(inner){
//     console.log(inner);
//     console.log(outer);

// }
// }

// var data = outer('outer');
// data('inner');

// var data = outer('outer1');
// data('inner2');

// function outer(outer) {
  
//     return function inner(inner) {
//         console.log("outer" , outer);
//     }
// }

// const newfunctions = outer('outer');
// newfunctions('Inner')
// newfunctions();


// function outerFunction(url){
//     fetch(url).then(()=>{
//         console.log();
//     })
// }

// function api(){
// fetch('http://example.com/movies.json')
//   .then(response => response.json())
//   .then(data => console.log(data))
//   .catch(err => console.log(err))
//   .finally( data => console.log(data))
// }

// Tricky Question in interview

// let var const

// for(let i = 1; i <= 10; i++){
  
//     const log = () => {
//         console.log(i);
//     } //closure function
  
//     setTimeout(log, 100); //callback  call functions after 100ms delay
// }

// function aaa(){
//     let a = 10;
// }

