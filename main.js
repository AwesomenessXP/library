/*
HELPFUL TIPS:
- store books objects in an array
- write function that loops through arrays, 
    display on screen
- make book button functional
- add button to remove book display
- add button to change read status
*/

// --------------------------- DEFINE OUR VARIABLES -------------------------
let myLibrary = [];
let inputTitle;
let inputAuthor;
let inputPages = document.getElementById('pages');
let inputRead;
let isBookAdded = false;
let booksInLibrary = 0;
const addBookBtn = document.getElementById("add-book-btn");
const popupWindow = document.getElementById('popup-window');
const popup = document.getElementById('popup');
const cancelBtn = document.getElementById('cancel-button');
const library = document.getElementById('library');
const submitBtn = document.getElementById('submit-btn');

// ----------------------------- OBJECTS/FUNCTIONS -------------------------

function Book(title = '', author = '', pageNum = '', isRead = false) { // the constructor
    this.title = title;
    this.author = author;
    this.pageNum = pageNum;
    this.isRead = isRead;
}

function addBookToLibrary (libraryArray) {
    if (libraryArray !== undefined) {
        createCardElements(libraryArray[booksInLibrary]);
        booksInLibrary++;// increment our counter
    }// if
}

function createCardElements (aBook) {
    // create library container
    const bookCard = document.createElement('div');
    bookCard.classList.add('book');
    
    // create book items
    let title = document.createElement('h3');
    let author = document.createElement('h3');
    let pageNum = document.createElement('h3');
    let isRead = document.createElement('h3');

    title.classList.add('title');
    author.classList.add('author');
    pageNum.classList.add('pages');
    isRead.classList.add('read');

    // create delete button
    let deleteBtn = document.createElement('button');
    deleteBtn.classList.add('delete-book-btn');
    deleteBtn.textContent = "Delete item"

    // display data to cards
    title.textContent = `Title: ${aBook.title}`;
    author.textContent = `Author: ${aBook.author}`;
    pageNum.textContent = `Pages read: ${aBook.pageNum}`;
    if (aBook.isRead) {
        isRead.textContent = "Finished";
        isRead.style.backgroundColor = 'rgb(0, 194, 0)';
    }// if
    else {
        isRead.textContent = "Not finished";
        isRead.style.backgroundColor = 'rgba(0, 110, 255, 0.781)';
    }// else

    // append book and its contents to the screen
    library.appendChild(bookCard);
    bookCard.appendChild(title);
    bookCard.appendChild(author);
    bookCard.appendChild(pageNum);
    bookCard.appendChild(isRead);
    bookCard.appendChild(deleteBtn);

    // add event listener for the specific book card
    deleteBtn.addEventListener('click', () => {
        library.removeChild(bookCard);
    });
}

function renderPopUp () {
    // make popup visible
    popupWindow.style.display = 'grid';
    popup.style.display = 'flex';
    popup.style.backgroundColor = 'rgba(0, 0, 0, 0.233)';
    popup.style.zIndex = '100';
}

function closePopUp () {
    // hide popup window
    popup.style.display = 'none';
    popupWindow.style.display = 'none';

    // delete any text typed in by user
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('pages').value = '';
    document.getElementById('yes').value = '';
    document.getElementById('no').value = '';
}

// ------------------------------ EVENT LISTENERS -------------------

window.addEventListener('load', () => {
    popup.style.display = 'none';
    popupWindow.style.display = 'none';
});

addBookBtn.addEventListener('click', () => {
    //before we add the book, we need to input data
    renderPopUp();
    addBookToLibrary();
});

cancelBtn.addEventListener('click', () => {
    closePopUp();
});

submitBtn.addEventListener('click', () => {
    // grab the data that the user entered in text fields
    inputTitle = document.getElementById('title').value;
    inputAuthor = document.getElementById('author').value;
    inputPages = document.getElementById('pages').value;
    document.getElementById('yes').checked ? inputRead = true : inputRead = false;

    // validate data
    if ((inputTitle !== '') && (inputAuthor !== '') && (inputPages !== '')) {
        const newBook = new Book(inputTitle, inputAuthor, inputPages, inputRead);
        myLibrary.push(newBook);
        addBookToLibrary(myLibrary);
        closePopUp();
    }// if
});