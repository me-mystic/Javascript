const element = document.createElement('li');
element.className = 'childul';
element.id = 'createdLi';
element.setAttribute('title', 'mytitle');
// text node
const text = document.createTextNode('text node for created li');
element.appendChild(text);
// // element.innerText = 'created li';
// element.innerHTML = '<b>created li</b>';
console.log(element);

const myul = document.querySelector('.uls');
myul.appendChild(element);

const elem2 = document.createElement('h3');
const tnode = document.createTextNode('tnode for head');
elem2.className = 'elem2';
elem2.id = 'elem2';
elem2.appendChild(tnode);
// replacing elements
element.replaceWith(elem2);
// replacing children
myul.replaceChild(element, elem2);

// removing child
// myul.removeChild(element);