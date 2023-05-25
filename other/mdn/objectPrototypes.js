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