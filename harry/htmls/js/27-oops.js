// object literal, constructor and oops

// object literal
let car = {
    name : ['bjk', 'hbjn'],
    topSpeed : 180,
    run : function() {
        console.log(`${car.name} is running`)
        return ;
    },
}

// already seen constructors:
// new Date(), new Time()..

// constructor
function carConstructor(name, speed) {
    this.name = name;
    this.speed = speed;
    this.run = function() {
        console.log(`${name} is running`)
    }
    this.analyze = function() {
        console.log(`this is ${200 - this.speed} kmph slower than mercedes`)
    }
}

let car1 = new car.constructor('wfc', 78);
let car2 = new carConstructor('thdw', 158);
console.log(car1.analyze(), car2.analyze());