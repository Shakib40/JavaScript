// function Person(fName , lName) {
//     this.firstName = fName;
//     this.lastName = lName;
// }

// Person.prototype.getFullName = function () { 
//     return this.firstName + ' ' + this.lastName
// }

// const person1 = new Person('shakib' , 'jilani')
// const person2 = new Person('shakib1' , 'jilani1')

// console.log(person1.getFullName());
// console.log(person2.getFullName());

// Prototype inheritance

function Person(fName , lName) {
    this.firstName = fName;
    this.lastName = lName;
}

Person.prototype.getFullName = function () { 
    return this.firstName + ' ' + this.lastName
}
function SuperPerson() {
    this.isSuperPerson = true;
}


