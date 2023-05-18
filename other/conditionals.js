// == --> matches only the value
// === --> matches also the datatype

const x = 10;
if(x == 10) {
    console.log("yes the value is same");
}if(x === 10) {
    console.log("yes the datatype is also same");
}

const y = 10;
if(y === 10) {
    console.log("y = 10");
} else if(y > 10) {
    console.log(" y > 10");
} else {
    console.log("y < 10");
}
const z = 5;
if(y > 10 || z < 10) {
    console.log(`either y > 10 or z < 10... y : ${y} z: ${z}`)
}

// ternary operator (?)
const color = x > 10 ? "black" : "white"
console.log(`color: ${color}`)
const c = "gray";
switch(c) {
    case 'black':
        console.log('black');
        break;
    case 'white':
        console.log('white');
        break;
    default:
        console.log('neither black nor white');
        break;
}