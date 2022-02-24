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


function outer () {
    let counter = 0;
    function inner () {
        counter++;
        console.log(counter);
    }
    return inner
}
 
const fn = outer()
fn()
fn()
fn()

