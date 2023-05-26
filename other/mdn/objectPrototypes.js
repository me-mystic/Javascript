/*
Prototype chains
    chain ending - undefined returned
    a prpty searched in object --> its proto --> its proto's proto --> ....chain
    to get proto of an obj :
        Object.getPrototypeOf(myObject); // Object { }

Object.getPrototypeOf(person)

{constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, …}

Object.getPrototypeOf( Object.getPrototypeOf(person))
null

*/ 

const newDate = new Date();
let object = newDate;

// Shadowing properties
object.getFullYear = function() {
    console.log("hjwc");
}

console.log(object);
console.log(Object.getPrototypeOf(object))
do {
    object = Object.getPrototypeOf(object);
    console.log(object)
}while(object);

/* 
setting prototype
    1. Object.create
*/ 

const PersonPrototype = {
    bio() {
        console.log(`I'm ${this.name}`);
    }
}

// creating a person boj with PersonPrototype as Prototype
const p1 = Object.create(PersonPrototype);
console.log((p1))
p1.name = 'shruti'
console.log(p1.name)
console.log(p1.bio())

/*
    2. Object.assign --> using constructor
*/ 

function Person(name, age) {
    this.name = name;
    this.age = age;
}
Object.assign(Person.prototype, PersonPrototype);
// Person.prototype = PersonPrototype;
const p2 = new Person('vysh', 18);
console.log(p2);
console.log(Object.getPrototypeOf(p2));

/*
Own Property
    1. hasOwn(ObjName, prptyName)
    2. hasOwnProperty()
*/ 
console.log(p2.hasOwnProperty('name')); //true
console.log(p2.hasOwnProperty('bio')); //false          
console.log(Object.hasOwn(Person,  'name')); //true
console.log(Object.hasOwn(Person,  'bio')); //false

class Shape {

    name;
    sides;
    sideLength;
    
    constructor(n, s, sl) {
        this.name = n;
        this.sides = s;
        this.sideLength = sl;
    }
  }
      