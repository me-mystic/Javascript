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

/*not just sets but creates new ones*/   
person["eyes"] = "hazel";
person.farewell = function () {
    console.log("Bye everybody!");
};

// dynamic setting of name and values
const myDataName = nameInput.value;
const myDataValue = nameValue.value;
person[myDataName] = myDataValue;

