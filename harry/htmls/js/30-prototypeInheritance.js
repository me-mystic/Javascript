// a prototype

const proto = {
    slogan: function() {
        console.log("we strive to stay the best")
    },
    changeName : function(name) {
        this.name = name;
    }
}

let harry = Object.create(proto);
harry.name = 'Shruu';
harry.roll = 279;
harry.slogan();
harry.changeName('ygde');
console.log(harry)

// also creates harry objj

let HarryObj = Object.create(proto, {
    name : {value : 'shru', writable : true},
    roll : {value : 279}
})
HarryObj.changeName('jbwe');
HarryObj.slogan()
console.log(HarryObj)   

// Employee constructor

const Employee = function(name, experience, salary) {
    this.name = name;
    this.experience =experience;
    this.salary = salary;
}

Employee.prototype.slogan = function() {
    console.log("slogan");
}
let e1 = new Employee('hgv', 0,2);
console.log(e1);

// Programmer constructor --> inheriting from employee

const Programmer = function(name, experience, salary, language) {
    Employee.call(this, name, experience, salary);
    this.language = language;
}
Programmer.prototype = Object.create(Employee.prototype);
Programmer.prototype.constructor = Programmer;
let p1 = new Programmer('hf', 2, 0, 'cds');
p1.slogan();
console.log(p1);