const todos = [
    {
        id : 1,
        text : 'meet ur boss',
        isCompleted : true
    },
    {
        id : 2,
        text : 'meet ur mom',
        isCompleted : false
    },
    {
        id : 3,
        text : 'meet ur baby',
        isCompleted : true
    }
]
console.log(todos[2].text);
const todosJSOn = JSON.stringify(todos);
console.log(todosJSOn);

// loops
for(let i = 0 ; i <= 10 ; i++) {
    console.log(`for loop : ${i}\n`);
}

let j = 0;
while(j < 11) {
    console.log(`while loop : ${j}\n`);
    j++;
}

//displaying arrays using loop
for(let i = 0 ; i < todos.length ; i++) {
    console.log(todos[i].text);
}
console.log("..................");

//using FOR OF LOOP
for(let todo of todos) {
    console.log(todo.text);
}

//HIGH ORDER ARRAY METHODS
//1. forEach--loop
//2. map-- create new array from existing array
//3. filter -- creates a new array based on condition

// forEach()
const todofor = todos.forEach(function(todo) {
    // return todo.id; --> *undefined
    console.log(todo.id)
})
// console.log(todofor); --> *undefined

// map() -- returns array
const todomap = todos.map(function(todo) {
    return todo.text;
})

console.log(todomap);

//filter -- returns array on a condition
const todofilt = todos.filter(function(todo) {
    return todo.isCompleted === true; //-->indexes where isCompleted is true
})
console.log(todofilt)