let libraryForm = document.getElementById('libraryForm');
let alert = document.getElementById('alert');
let no = 1;
let tabBody = document.getElementById('books');
  
// search
let search = document.getElementById('searchInp');
search.addEventListener('input', () => {
    console.log(search.value);
    searchVal = search.value;
    let row = document.getElementsByClassName('row');
    Array.from(row).forEach(e => {
        let name = e.getElementsByTagName('td')[1].innerText;
        let author = e.getElementsByTagName('td')[2].innerText;
        let type = e.getElementsByTagName('td')[3].innerText;
        if((name.includes(searchVal) || author.includes(searchVal) || type.includes(searchVal))) {
            e.style.display = 'table-row';
        } else {
            e.style.display = 'none';
        }
    })
})

// reloading the page
window.onload = function() {
    console.log('reloading')
    if(localStorage.getItem('books') != null) {
        let booksArr = JSON.parse(localStorage.getItem('books'));
        let display = new Display();
        booksArr.forEach(e => {
            let book = new Book(e.name, e.author, e.type);
            console.log(book);
            display.add(book);
        });
    }
}

// book constructor
function Book(name, author, type) {
    this.name = name;
    this.author = author;
    this.type = type;
}

// display constructor
function Display() {

}

Display.prototype.add = function(book) {
    console.log('adding')
    let UIstring = `
                    <tr class='row'>
                        <td>${no}</td>
                        <td id='nameInp'>${book.name}</td>
                        <td id='authorInp'>${book.author}</td>
                        <td id='typeInp'>${book.type}</td>
                        <td>
                            <button class='delBtn' onclick=delBook(${no -1})>Delete</button>
                        </td>
                    </tr>
    `
    no++;
    tabBody.innerHTML += UIstring;
}

Display.prototype.clear = function() {
    setTimeout(() => {
        libraryForm.reset()
    }, 1000);
}

Display.prototype.validate = function(book) {
    console.log('validating')
    if(book.name.length < 3 || book.author.length < 3) {
        return false;
    }
    return true;
}

Display.prototype.showAlert = function(type, msg) {
    console.log('alerting')
    let alertBox = `
    <div class="alertBox ${type}"><bold>${type}!</bold> ${msg}</div>
    `
    alert.innerHTML = alertBox;
    setTimeout(() => {
        alert.innerHTML = "";
    }, 2000);
}

Display.prototype.store = function(book) {
    let booksArr = [];
    if(localStorage.getItem('books') != null) {
        booksArr = JSON.parse(localStorage.getItem('books'));
    }
    booksArr.push(book);
    booksStringified = JSON.stringify(booksArr);
    localStorage.setItem('books', booksStringified);
    console.log(localStorage.getItem('books'))
}

const delBook = function(idx) {
    if(confirm('Sure u wanna delete?')) {
        let booksArr = JSON.parse(localStorage.getItem('books'));
        booksArr.splice(idx, 1);
        booksStringified = JSON.stringify(booksArr);
        localStorage.setItem('books', booksStringified);
        location.reload();
    }
}
libraryForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let name = document.getElementById('bookName').value;
    let author = document.getElementById('authorName').value;
    let type;
    let fiction = document.getElementById('fiction');
    let horror = document.getElementById('horror');
    let thriller = document.getElementById('thriller');

    if(fiction.checked) {
        type = fiction.value;
    } else if(horror.checked) {
        type = horror.value;
    } else {
        type = thriller.value;
    }

    let book = new Book(name, author, type);
    console.log(book);
    
    let display = new Display();
    if(display.validate(book)) {
        display.store(book);
        display.add(book);
        display.clear();
        display.showAlert("Success", "You Successfully added your book")
    } else {
        display.showAlert("Warning", "Field values should have atleast 3 letters")
    }
    console.log('submitted')
})