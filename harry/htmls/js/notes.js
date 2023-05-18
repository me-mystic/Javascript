const addBtn = document.querySelector('.addbtn');
const noteDiv = document.querySelector('#notes');
const desc = document.querySelector('#desc');


addBtn.addEventListener('click', addNote);
function addNote() {
    const text = document.querySelector('#desc').value;
    const note = document.createElement('div');
    note.setAttribute('class', 'note')
    note.innerText = text;
    noteDiv.appendChild(note);
    noteDiv.appendChild(t);
    const uh = setTimeout(clearDesc, 3000);
}
function clearDesc() {
    alert('ec');
    // desc.innerText = '';
}