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




//------------Old-----------------


// Global context
// In the global execution context(outside of any function), this refers to the global object whether in strict mode or not.

// console.log(this);

// console.log(this === window);

// name = 'shakib';
// console.log(window.name);

// this.city = 'patna'
// console.log(window.city);
// console.log(city);


// function content
// function abc() {
//     return this
// }
// console.log(abc() === window);

// function abc1() {
//     'use strict';
//     return this
// }

// function abc() {
//     'use strict';
//     console.log(this);
// }
// abc()

// console.log(abc1() === window);

// function whoAre() {
//     console.log(this);
// }

// const You = {
//     name: 'shakib',
//     age: 36,
//     whoAre,
// }
// You.whoAre();

// Bind Method

// function AreYou() {
//     console.log(this);
// }
// const Who = {
//     name: 'shakib',
//     age: 24,
//     city: 'Pune',
//     // AreYou,
// }

// const itsMe = AreYou.bind(Who) //Bind makes new function where this is explicit
// itsMe();


// Function Contructor
// function Horse(name, age, city, country) {
//     this.name = name // property
//     this.age = age // property
//     this.city = city // property
//     this.country = country // property
// }

// const myHorse = new Horse('horse1', 22, 'patna', 'india'); // new create objects where this is the new object

// console.log(myHorse);
// console.log(myHorse.age);


// Bind , Call  , Apply

// function showDetail() {
//     return this.name + ':' + this.age
// }

// const details = {
//     name: 'shakib',
//     age: 21
// }

// const showDetails = showDetail.bind({ name: 'shakib', age: 25 });
// console.log(showDetails());

// console.log(showDetail.apply(details, [1, 2, 3]))

// console.log(showDetail.call(details, ...[1, 2, 3]))

// function add(c, d) {
//     return this.a + this.b + c + d;
// }

// var o = { a: 1, b: 3 };
// console.log(add.call(o, 5, 7));
// console.log(add.apply(o, [10, 20]));


// functional based this keyword use
// const Fun = props => {
//     <div>
//         <h1>Hello , {props.name}</h1>
//     </div>
// };

// OOP based this keyword use
// class Classic extends Component {

//     constructor(props) {
//         super(props);
//         this.state = {
//             myState: true,
//         }
//     }
// }


// function Horse(name, age) {
//     this.name = name;
//     this.age = age;

//     this.details = function () {
//         console.log(this.name + ":" + this.age)
//         return this
//     }
// }
// const myHorse = new Horse('shakib', '26');

// myHorse.details().details().details().details();


// function Horse(name, age) {
//     this.name = name;
//     this.age = age;
//     this.details = function () {
//         console.log(this.name + ":" + this.age);
//         return this
//     }
// }
// const myHorse1 = new Horse('shakib', '26');

// myHorse1.details().details().details().details().details()



