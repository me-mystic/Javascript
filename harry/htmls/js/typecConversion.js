let myVar = String(34);
console.log(typeof myVar);
let num = 10;
console.log(typeof num.toString());
let bool = true;
console.log(bool , typeof(bool));
console.log(bool , typeof(bool.toString()));

let obj = {
    name:"shru",
    roll:279
}
obj = String(obj);
console.log(obj, typeof(obj));

let arr = String([1,3,5,7, true]);
console.log(arr, typeof arr);
let date = String(new Date());
console.log(date, typeof date);

// number
let stri = Number("3443");
console.log(stri, typeof stri);
console.log(Number(bool), typeof Number(bool))

// parse int and float
let n = 35.45;
console.log(parseInt(n), typeof parseInt(n));
console.log(parseFloat(n), typeof parseFloat(n));

// to fixed
console.log(n.toFixed(3)); //-->35.450
console.log(n.toFixed()); //-->35

// type coercion
let str = '2343'
console.log(str + n);
console.log(parseInt(str) + n);
console.log(Number(str) + n);// same ^^