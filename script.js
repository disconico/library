//Assign all elements
const inputBtn = document.getElementById('user-input')
const sendBtn = document.getElementById('send-input')

//Buttons events
inputBtn.addEventListener('click', showRequest)
sendBtn.addEventListener('click', addBookToLibrary)
sendBtn.addEventListener('click', hideRequest)

// Main functions 
let myLibrary = [];

class Book {
    constructor (title, author, pages, isRead) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.isRead = isRead;
    }
}

function addBookToLibrary() {
    const form = document.querySelector('form')
    const title = document.getElementById('bookTitle').value
    const author = document.getElementById('bookAuthor').value
    const pages = document.getElementById('pagesNumber').value
    const isRead = document.getElementById('isRead').checked
    const book = new Book(title, author, pages, isRead)
    myLibrary.push(book)
    showBooks()
    form.reset()
}

function showRequest () {
    document.getElementById('formElement').style.display = 'block';
}

function hideRequest () {
    document.getElementById('formElement').style.display = 'none';   
}

function showBooks () {
    myLibrary.forEach(Element => console.table(Element))
}





