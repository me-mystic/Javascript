//objects --> 1. constructor fn.s with prototypes
//            2. es 6 classes

// 1--> constructor function
function Person(firstname, lastname, dob) { // -->parameters : we want to set them as properties of object
    this.firstname = firstname;
    this.lastname = lastname;
    this.dob = new Date(dob);// -->will show the actual date object
    // this.getBirthYear = function() {
    //     return this.dob.getFullYear();
    // }

    // this.getBirthYear = () => this.dob.getFullYear();
    // this.getFullname = () => `${this.firstname} ${this.lastname}`;
}

// when u write prototype..these methods are not listed in the object..they're listed in the prototype
Person.prototype.getBirthYear = function() { return this.dob.getFullYear()};
Person.prototype.getFullname = function() { return `${this.firstname} ${this.lastname}`};

const person1 = new Person('shruti', 'kolla', '11-12-2002') //-->date : mon-date-year
const person2 = new Person('lava', 'kolla', '06-04-2000')
console.log(person1.dob);
console.log(person1.getFullname());
console.log(person2.getBirthYear());
console.log(person1);