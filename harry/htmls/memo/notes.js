const addBtn = document.querySelector('.addbtn');
const clearBtn = document.querySelector('.clearbtn');
const noteDiv = document.querySelector('#notes');
const desc = document.querySelector('#desc');
addNote();


addBtn.addEventListener('click', function(e) {
    let text = desc.value;
    let notes = localStorage.getItem('notes');
    if(notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }
    notesObj.push(text);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    addNote();
})

function addNote() {
    let notes = localStorage.getItem('notes');
    if(notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }
    if(notesObj.length != 0) {
        let html = "";
        notesObj.forEach(function(element, index) {
            html += `<div class="note">
                            <h3>Note ${index + 1}</h3>
                            <p>${element}</p>
                            <button onclick="del(this.id)" id="${index}" class="delBtn">Delete</button>
                        </div>`;
            noteDiv.innerHTML = html;
        });
    } else {
        noteDiv.innerHTML = `<p id="nothing">Nothing to show.. Add notes!!</p>`;
    }
}

function del(index) {
    let notes = localStorage.getItem('notes');
    if(notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }
    notesObj.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    addNote();
}

clearBtn.addEventListener('click', function() {
    if(confirm("u really want to clear?")) {
        localStorage.clear();
        addNote();
    }
})

// search functionality

const search = document.getElementById("searchInp");
console.log(search)
search.addEventListener('input', function() {
    let inputVal = search.value;
    // console.log('search fired', inputVal);
    notesCard = document.getElementsByClassName('note');
    // console.log(notesCard);
    Array.from(notesCard).forEach(function(element) {
        cardVal = element.getElementsByTagName('p')[0].innerText;
        if(cardVal.includes(inputVal)) {
            element.style.display = "block";
            // console.log(cardVal);
        } else {
            element.style.display = "none";
        }
    })
})

document.querySelector('.cross').addEventListener('click', function() {
    document.querySelector('#searchInp').value =" ";
})