console.log('an editable div')

/*Q.. 
U have to create a div and inject it into the page which contains a heading.
Whenever someone clicks on the div, it should be converted into an editable item. Whenever user clicks away(blur) save the note into the local Storage*/ 


// LEARNT ::
/* blur event :: 
blur event fires when an element has lost focus. An element will lose focus if another element is selected
   focus event ::
focus event fires when the element has recieved focus*/ 

const div = document.createElement('div');
div.setAttribute('id', 'edit');
div.innerText = 'double click to edit';

div.style.width = '290px';
div.style.height = '40px';
div.style.overflow = 'auto';
div.style.border = '2px black solid';
div.style.borderRadius = '3px';
div.style.fontFamily = 'monospace'
div.style.padding = '5px'
div.style.boxSizing = 'borderbox';

document.body.appendChild(div);

const textAr = document.createElement('textarea');

textAr.style.width = '300px';
textAr.style.height = '50px';
textAr.style.padding = '5px'

div.addEventListener('click', fn1);
function fn1() {
    div.replaceWith(textAr);
}

textAr.addEventListener('blur', fn2);

function fn2() {
    const text = textAr.value;
    textAr.replaceWith(div);
    div.innerText = text;
    localStorage.setItem('edited', text);
}