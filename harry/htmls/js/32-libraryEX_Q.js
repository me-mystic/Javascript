/*
create a class library and implement the following:
constructor must take the book list as argument
getBookList()
issueBook(bookname, user)
returnBook(bookname)

*/ 

class library {
    books = [];
    issuedBooks = [];
    constructor(books) {
        // adding book to the list
        books.forEach(element => {
            this.books.push(
                {
                    name : element,
                    status : true
                }
            )
        });
        this.issuedBooks = [];
    }
    getBookList() {
        this.books.forEach(e => {
            console.log(e.name);
        })
    }
    issueBook(bookName, userName) {
        // update the status
        for(let i = 0 ; i < this.books.length ; i++) {
            if(this.books[i].name == bookName) {
                this.books[i].status = false;
                console.log(this.books);
            }
        }
        let obj = {
            name : bookName,
            user : userName
        }
        this.issuedBooks.push(obj);
        console.log(this.issuedBooks);
    }
    returnBook(bookName) {
        // remove book from issuedBooks
        for(let i = 0 ; i < this.issuedBooks.length ; i++) {
            if(this.issuedBooks[i].name == bookName) {
                this.issuedBooks.splice(i, 1);
            }
        }
        // update status in booklist
        for(let i = 0 ; i < this.books.length ; i++) {
            if(this.books[i].name == bookName) {
                this.books[i].status = true;
                console.log(this.books);
            }
        }
    }
}

let list = ['a', 'b', 'c'];
const p1 = new library(list);
p1.getBookList()