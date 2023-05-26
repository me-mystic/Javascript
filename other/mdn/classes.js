/*
    1. Inheritance
*/ 

class Person {
    name;
    name;
    constructor(name) {
        this.name = name;
        this.name = name;
    }
    introduceSelf() {
        let text = document.createTextNode(`hi I'm ${this.name}`);
        document.querySelector('body').appendChild(text)
    }
}
let p = new Person('Shruti');
/*Property '#name' is not accessible outside class 'Person' because it has a private identifier.*/ 
// console.log(p.#name)

class Student extends Person {
    #year;
    constructor(name, year) {
        super(name);
        this.#year = year;
    }
    introduceSelf() {
        let text = document.createTextNode(`hi I'm ${this.name}. I'm a student in year : ${this.#year}`);
        document.querySelector('body').appendChild(text);
    }
    canStudyML() {
        if(this.#year > 1) {
            let text = document.createTextNode(`${this.name} can study ML as the student is in year : ${this.#year}`);
            document.querySelector('body').appendChild(text);
        }
    }
}

let s = new Student('shruti', 2);