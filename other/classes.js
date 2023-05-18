// 2--> es 6 classes
class Person {
    constructor(firstname, lastname, dob) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.dob = new Date(dob);
    } 
    getFullname() {
        return `${this.firstname} ${this.lastname}`;
    }
    getBirthYear() {
        return this.dob.getFullYear();
    }
}

const person1 = new Person('shruti', 'kolla', '11-12-2002');
console.log(person1.getBirthYear());
console.log(person1.getFullname());
console.log(person1);