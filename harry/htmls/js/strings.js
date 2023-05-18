let htmlStr = "<h1> Ore wa Shruti desu</h1>"
               +" <p>Youroshiku!! </p>";

htmlStr = htmlStr.concat('<p>yohoooo</p>');
console.log(htmlStr);

console.log(htmlStr.indexOf('h'))
console.log(htmlStr.substring(2,6))// ub --> exclusive
console.log(htmlStr.slice(2,6)); // same as substring
console.log(htmlStr.slice(-4));// last 4 chars
console.log(htmlStr.slice(0,-4));// all - last 4 chars
console.log(htmlStr.split('p'));
htmlStr = htmlStr.replaceAll('p', 'h1');
document.body.innerHTML = htmlStr;

let namei = "shruti"
let str = `<h1> Ore wa ${namei} desu</h1>
           <p>Youroshiku!! </p>
`
console.log(str);
document.body.innerHTML = str;