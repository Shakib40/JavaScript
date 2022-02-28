// setTimeout()
// the setTimeout function executes a particular block of code once after a specified time has elapsed

// setTimeout(function , duration , params1, params2 , ....)

// function greet(){
//     console.log('Hello wrold');
// }
// setTimeout( greet, 2000);


// function greet1(value){
//     console.log(`Hello ${value}`);
// }
//  setTimeout( greet1, 2000, 'Wrold');


function greet2(value , count){
    console.log(`Hello ${value} and ${count++}`);
}
const interval =  setInterval( greet2, 2000, 'Wrold' , 1)
clearInterval(interval)


