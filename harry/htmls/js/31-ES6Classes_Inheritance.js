// ES6 classes and inheritance

// Employee class
class Employee {
    constructor(name, experience, division) {
        this.name = name;
        this.experience = experience;
        this.division = division;
    }
    slogan() {
        return `Im ${this.name}, this company is best`;
    }
    joiningYear() {
        return `experience: ${2023 - this.experience}`;
    }
    // static method..called using class name
    static add(a,b) {
        return a+b;
    }
}

let e1 = new Employee('hgsca', 10, 'vdgs');
console.log(e1)
console.log(e1.joiningYear())
console.log(e1.slogan())
console.log(Employee.add(3,6));

// Programmer inherits employee
class Programmar extends Employee {
    constructor(name, experience, division, language, github) {
        super(name,experience,division);
        this.language = language;
        this.github = github;
    }
    favoriteLanguage() {
        if(this.language ==  'Python') {
            console.log('Python');
        } else {
            console.log('java');

        }
    }
}
let p1 = new Programmar('fghj', 39, 'fgcv', 'hf', 'gf88');
console.log(p1);
console.log(p1.joiningYear());
console.log(p1.favoriteLanguage());
