//Assign all elements
const inputBtn = document.getElementById('user-input')
const sendBtn = document.getElementById('send-input')
const cancelBtn = document.getElementById('cancel-input')
const form = document.querySelector('form')
const bookContainer = document.getElementById('book-container')



//Buttons events
inputBtn.addEventListener('click', showRequest)
sendBtn.addEventListener('click', addBookToLibrary)
sendBtn.addEventListener('click', hideRequest)
cancelBtn.addEventListener('click', hideRequest)
cancelBtn.addEventListener('click', formReset)


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
    const title = document.getElementById('bookTitle').value
    const author = document.getElementById('bookAuthor').value
    const pages = document.getElementById('pagesNumber').value
    const isRead = document.getElementById('isRead').checked
    const book = new Book(title, author, pages, isRead)
    

    
    let newBook = document.createElement('div')
    newBook.setAttribute("class", "book")
    newBook.setAttribute("id", myLibrary.length)
    console.log(myLibrary.length)
    let newBookTitle = document.createElement('p')
    newBookTitle.innerText = title
    newBook.appendChild(newBookTitle)
    let newBookAuthor = document.createElement('p')
    newBookAuthor.innerText = author
    newBook.appendChild(newBookAuthor)
    let newBookPages = document.createElement('p')
    newBookPages.innerText = pages
    newBook.appendChild(newBookPages)
    let newBookStatus = document.createElement('p')
    newBookStatus.innerText = isRead
    newBook.appendChild(newBookStatus)
    let newBookDelete = document.createElement('button')
    newBookDelete.innerText = "Delete this book"
    newBookDelete.setAttribute("id", "delete-button")
    newBook.appendChild(newBookDelete)

    bookContainer.appendChild(newBook)

    myLibrary.push(book)
    // showBooks()
    console.log(myLibrary)
    formReset()
}

function formReset () {
    return form.reset()
}

function showRequest () {
    document.getElementById('myForm').style.display = 'block';
}

function hideRequest () {
    document.getElementById('myForm').style.display = 'none';   
}

function showBooks () {
    myLibrary.forEach(Element => console.table(Element))
}



// Add default books
function defaultBook (title, author, pages, isRead) {
    const book = new Book(title, author, pages, isRead)
    let newBook = document.createElement('div')
    newBook.setAttribute("class", "book")
    newBook.setAttribute("id", myLibrary.length)
    console.log(myLibrary.length)
    let newBookTitle = document.createElement('p')
    newBookTitle.innerText = title
    newBook.appendChild(newBookTitle)
    let newBookAuthor = document.createElement('p')
    newBookAuthor.innerText = author
    newBook.appendChild(newBookAuthor)
    let newBookPages = document.createElement('p')
    newBookPages.innerText = pages
    newBook.appendChild(newBookPages)
    let newBookStatus = document.createElement('p')
    newBookStatus.innerText = isRead
    newBook.appendChild(newBookStatus)
    let newBookDelete = document.createElement('button')
    newBookDelete.innerText = "Delete this book"
    newBookDelete.setAttribute("id", "delete-button")
    newBookDelete.setAttribute("class", "delete-button")
    newBookDelete.setAttribute("type", "button")
    newBook.appendChild(newBookDelete)

    bookContainer.appendChild(newBook)
    myLibrary.push(book)
    console.log(myLibrary)
}

defaultBook('titleA', 'authorA', '123', true)
defaultBook('titleB', 'authorB', '456', false)
defaultBook('titleC', 'authorC', '416', false)
defaultBook('titleD', 'authorD', '12', true)
defaultBook('titleE', 'authorE', '47', false)


const deleteBtn = document.querySelectorAll('.delete-button')
deleteBtn.forEach(button => button.addEventListener('click', deleteBook))

function coucou () {
    console.log("coucou")
}

function deleteBook (e) {
    let x
    x = e.target.id
    console.log(typeof(x))
   myLibrary.splice(Number(x), 1)
}

// function deleteBook () {
//     myLibrary.shift()
// }

