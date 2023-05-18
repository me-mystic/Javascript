function addnums(n1, n2) {
    return n1 + n2;
}
console.log(addnums(3,6));

// arrow function--> instead of writing function keyword we'll name it as a variable

const add = (n1, n2) => console.log(n1 + n2);
// if (only one line in the fn..remove {..}) and dont have to write return
add(6,2);

const sum = (n1) => n1 + 5; //didn't return
console.log(sum(5));

//using => in forEach
const arr = [
    {
        roll : 67,
        name : 'shrutz',
    },
    {
        roll : 45,
        name : 'vysh',
    },
    {
        roll : 63,
        name : 'lava',
    }
]

arr.forEach(function(i) {
    console.log(i);
})
console.log('arr using forEach with arrow fn');
arr.forEach((t) => console.log(t));
console.log('arr using map with arrow fn');
const arrmap = arr.map((t) => t);
console.log(arrmap);
const arrfilt = arr.filter((t) => t.roll === 67);
console.log('arr using map with arrow fn');
console.log(arrfilt);

// another nice thing -- > lexical this !!--> not covered in this video