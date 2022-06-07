(function () {
//Assign all elements
const inputBtn = document.getElementById('user-input')
const sendBtn = document.getElementById('send-input')
const cancelBtn = document.getElementById('cancel-input')
const deleteBtn = document.querySelectorAll('.delete-button')
const removeAllBtn = document.getElementById('remove-all')
const form = document.querySelector('form')

//Buttons events
inputBtn.addEventListener('click', showRequest)
sendBtn.addEventListener('click', addBookToLibrary)
sendBtn.addEventListener('click', hideRequest)
cancelBtn.addEventListener('click', hideRequest)
cancelBtn.addEventListener('click', formReset)
removeAllBtn.addEventListener('click', clearAll)

//Book constructor
class Book {
    constructor (title, author, pages, isRead) {
        this.title = form.title.value;
        this.author = form.author.value;
        this.pages = form.pages.value + " pages";
        this.isRead = form.isRead.checked;
    }
}

//creates book from Book Constructor, adds to library
let myLibrary = [];
let newBook;

function addBookToLibrary(title, author, pages, isRead) {
    newBook = new Book(title, author, pages, isRead)
    myLibrary.push(newBook)
    setData()
    render()
    form.reset()
}    

// Create book visual in browser
function render () {
    const bookContainer = document.getElementById('book-container')
    const books = document.querySelectorAll('.book')
    books.forEach(book => bookContainer.removeChild(book))

    for (let i = 0; i < myLibrary.length; i++){
        createBook(myLibrary[i])
    }
}

// Create book DOM elements
function createBook(item) {
    const library = document.querySelector('#book-container')
    const bookDiv = document.createElement('div')
    const newBookTitle = document.createElement('div')
    const newBookAuthor = document.createElement('div')
    const newBookPages = document.createElement('div')
    const newBookStatus = document.createElement('button')
    const newBookDelete = document.createElement('button')
    const newBookEdit = document.createElement('button')
    
    bookDiv.classList.add('book')
    bookDiv.setAttribute("id", myLibrary.indexOf(item))
    
    newBookTitle.classList.add('title')
    newBookTitle.textContent = item.title
    bookDiv.appendChild(newBookTitle)
    
    newBookAuthor.classList.add('author')
    newBookAuthor.textContent = item.author
    bookDiv.appendChild(newBookAuthor)
    
    newBookPages.classList.add('pages')
    newBookPages.textContent = item.pages
    bookDiv.appendChild(newBookPages)
    
    newBookStatus.classList.add('status')
    if (item.isRead === true) {
        newBookStatus.textContent = 'Read'
        newBookStatus.classList.add('Read')
        bookDiv.style.borderLeft = '8px solid green'
    } else {
        newBookStatus.textContent = 'Not read'
        newBookStatus.classList.add('Not-read')
        bookDiv.style.borderLeft = '8px solid red'
    }
    newBookStatus.setAttribute('id', 'status')
    bookDiv.appendChild(newBookStatus)
    
    newBookDelete.classList.add('delete-button')
    newBookDelete.textContent = "Remove"
    newBookDelete.setAttribute("id", "delete-button")
    bookDiv.appendChild(newBookDelete)

    library.appendChild(bookDiv)

    newBookDelete.addEventListener('click', () => {
        myLibrary.splice(myLibrary.indexOf(item), 1)
        setData()
        render()
    })

    newBookStatus.addEventListener('click', () => {
        if ( item.isRead === true) {
            item.isRead = false
        } else {
            item.isRead = true
        }
        setData()
        render()
    })
}

// Others functions
function formReset () {
    return form.reset()
}

function showRequest () {
    document.getElementById('myForm').style.display = 'block';
}

function hideRequest () {
    document.getElementById('myForm').style.display = 'none';   
}

function clearAll () {
   myLibrary = []
   render()
}

//Add default books
class Book2 {
    constructor (title, author, pages, isRead) {
        this.title = title
        this.author = author
        this.pages = pages + ' pages'
        this.isRead = isRead
    }
}

let A = new Book2("Harry Potter and the Philosopher's Stone", 'J.K. Rowling', '352', true)
myLibrary.push(A)
let B = new Book2('The Art Of War', 'Sun Tzu', '62', false)
myLibrary.push(B)
render()

//Setting library to be stored in local storage
function setData() {
    localStorage.setItem(`myLibrary`, JSON.stringify(myLibrary));
}

//pulls books from local storage when page is refreshed
function restore (){
if(!localStorage.myLibrary) {
    render();
}else {
    let objects = localStorage.getItem('myLibrary') // gets information from local storage to use in below loop to create DOM/display
    objects = JSON.parse(objects);
    myLibrary = objects;
    render();
}
}

restore()

})()