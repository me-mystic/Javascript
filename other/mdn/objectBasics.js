
// --------1.
const person = {
    name: ["Bob", "Smith"],
    age: 32,
};

function logProperty(propertyName) {
    console.log(person[propertyName]);
}

logProperty("name");
// ["Bob", "Smith"]
logProperty("age");
// 32

// -------2.
/*not just sets but creates new ones*/   
person["eyes"] = "hazel";
person.lips = "pink"
console.log(person)
person.farewell = function () {
    console.log("Bye everybody!");
};

// -------3.
// dynamic setting of name and values
// const myDataName = nameInput.value;
// const myDataValue = nameValue.value;
// person[myDataName] = myDataValue;

// const myNotification = new Notification("hello");

/* -------4.
    constructor using just a function
*/
    function createPerson(name) {
        obj = {};
        obj.name = name;
        obj.bio = function() {
            console.log(`my name is ${obj.name}`);
        };
        return obj;
    } 
    const o1 = new createPerson('shreya');
    o1.bio();
    /* a constructor */ 
    function createP(name) {
        this.name = name;
        this.bio = function() {
            console.log(`my name is ${this.name}`);
        }
    }
    const o2 = new createP('shruti');
    o2.bio();