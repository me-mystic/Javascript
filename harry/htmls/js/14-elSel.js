// element.className
// element.childNodes
// element.parentNode
// element.style.color = red
// element.style.background = ..
// element.style.background = ..
// innertext innerhtml, nodes

// let e = "<h1>dWAFDS</h1><p>gufewh</p>"
// i = document.getElementById('myfirst');
// i.innerHTML = e;
// alert(i.innerHTML);
// alert(i.innerText);

// element selectors
// 1. single element selectors --> u can select a single element from dom at a time

// query selectors
// console.log(document.querySelector('#myfirst'));
// console.log(document.querySelector('.child')); // --> 1st element with classname child
// console.log(document.querySelectorAll('.child')); // --> all elements with classname child.. as a NodeList
// u can write..tags, classes, ids in querySelector

// 2. Multi element selectors

let divs = document.getElementsByClassName('container');
let elems = document.getElementsByClassName('child');
for(let i = 0 ; i < elems.length ; i ++) 
{
    elems[i].style.fontWeight = 'bold';
}