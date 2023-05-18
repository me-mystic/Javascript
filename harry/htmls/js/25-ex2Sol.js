let container = document.querySelector('.container');
let divElem = document.createElement('div');
let first = document.getElementById('myfirst');

let val = localStorage.getItem('text');
let text;
if(val == null) {
    text = document.createTextNode('click to edit this div');
} else {
    text = document.createTextNode(val);
}
divElem.appendChild(text)

divElem.setAttribute('id', 'elem');
divElem.setAttribute('style', 'border:2px solid black ; width:200px; height:70px; margin:10px; padding:20px');

// insert div before first
container.insertBefore(divElem, first);

divElem.addEventListener('click', function() {
    let textno = document.getElementsByClassName('textarea').length;
    if(textno == 0) {
        let html = elem.innerHTML;
        divElem.innerHTML = `<textarea id='textarea' class='textarea' style='border:1px solid grey; height:100%;weight:100%'>${html}</textarea>`;
        let textarea = document.getElementById('textarea');
        textarea.addEventListener('blur', function() {
            elem.innerHTML = textarea.value;
            localStorage.setItem('text', textarea.value);
        })
    }
})