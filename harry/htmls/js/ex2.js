const head = document.createElement('h3');
const tnode = document.createTextNode('Go to CodeWithHarry');
head.className = 'heading';
head.appendChild(tnode);
console.log(head);

const link = document.createElement('a');
link.href = 'https://www.codewithharry.com';
console.log(link);
link.appendChild(head);

document.body.appendChild(link);