// the javascript this keyword which is used in a function refers to the object it belongs to

// it makes function reusable by letting you decide the object value

// this value is determined entirely by how a function is called 


// implicit binding
// explicit binding
// new binding
// default binding

// Order of precedence
// new Binding
// explicit binding
// implicit binding
// default binding



// function sayMyName(name) {
//     console.log('My name is ' + name);
// }
// sayMyName('shakib')



// implicit binding

// const person = {
//     name: 'John',
//     sayMyName:function(){
//         console.log(`My name is ${ this.name}`);
//         console.log('My name is:', this.name);
//     }
// }
// person.sayMyName();



// explicit binding
// const person = {
//     name: 'John',
//     sayMyName:function(){
//         console.log('My name is:', this.name);
//     }
// }

// function sayMyName(){
//     console.log('My name is', this.name)
// }
// sayMyName.call(person)


// new binding
// function Person(name , age , email){
//     this.name = name;
//     this.age = age;
//     this.email = email;
// }

// const P1 = new Person( 'John', 13 , 'shakib@gmail.com') 
// const P2 = new Person( 'John2', 13 , 'shakib2@gmail.com') 
// console.log(P1);
// console.log(P2);


// default binding
// const name = 'John1'

// globalThis.name = 'John'

// function sayMyName(){
//     console.log('My name is', this.name)
// }
// sayMyName()

