// Scope determines the visibility and accessibility of a variable . Javascript has three
//1 Global Scope
//2 Local Scope
// Block Scope


let a = 10;
function outer (){
    let b = 20;
    function inner (){
        let c = 30;
        console.log(a,b,c);
    }
    inner()
}
outer()


