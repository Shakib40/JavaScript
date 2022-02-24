// Currying is a process in functional programming in which we tranform a function with multiple
// arguments into a sequence of nesting function that take one arguments at a time.

// function f(a,b,c)  is tranformed to f(a)(b)(c)


function sum(a,b,c) {
    return a + b + c;
}
// console.log(sum(1,2,3));


function curry(fn) {
    return function(a){
        return function(b){
            return function(c){
                return fn(a,b,c)
            }
        }
    }
}

const curriedsum = curry(sum)
console.log( curriedsum(2)(3)(5) );
