let arr = [1, 2, 3, 4, 5, 6, 7]
arr.forEach((e, i, ar) => console.log(e, i, ar));
const arrmap = arr.map((e, i, ar) => i);
console.log(arrmap); // [0,1,2]
let arrfilt = arr.filter((e, i) => i % 2 === 1); // gives even positioned no.s
console.log(arrfilt);

// object  traverse
let obj = {
    name:'afewebt',
    roll:3645
}


for(key in obj) {
    console.log(`key : ${key} value: ${obj[key]}`)
}