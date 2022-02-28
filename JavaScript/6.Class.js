class Person {
    constructor(fname,lname , age) {
        this.firstName = fname;
        this.lastName = lname;
        this.age = age;
    }
    // method
    sayMyName() {
        return this.firstName + ' ' + this.lastName + ' ' + this.age
    }
}

const person = new Person('shakib' , 'jilani' , 22);

console.log(person.sayMyName());


class SuperPerson extends Person {
    constructor(fname , lname , age) {
        super(fname , lname , age)
        this.isSuperPerson = true;
    }
    fightCrime(){
      console.log("Fighting crime");function Person(fName , lName) {
    this.firstName = fName;
    this.lastName = lName;
}

Person.prototype.getFullName = function () { 
    return this.firstName + ' ' + this.lastName
}
    }
}

const batman = new SuperPerson('alpha' , 'beta' , 22)
console.log(batman.sayMyName())
