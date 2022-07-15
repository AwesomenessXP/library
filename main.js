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
let newBook;
const addBookBtn = document.getElementById("add-book-btn");
const popupWindow = document.getElementById('popup-window');
const popup = document.getElementById('popup');
const cancelBtn = document.getElementById('cancel-button');
const library = document.getElementById('library');
const submitBtn = document.getElementById('submit-btn');

// ----------------------------- OBJECTS/FUNCTIONS -------------------------

function Book(title = '', author = '', pageNum = 0, isRead = '') { // the constructor
    this.title = title;
    this.author = author;
    this.pageNum = pageNum;
    this.isRead = isRead;
}

function addBookToLibrary (args) {
    if (args !== undefined) {
        console.log(`${args[0].title}, ${args[0].author}, ${args[0].pageNum}, ${args[0].isRead}`);
    }
}

function renderPopUp () {
    popupWindow.style.display = 'grid';
    popup.style.display = 'flex';
    popup.style.backgroundColor = 'rgba(0, 0, 0, 0.233)';
    popup.style.zIndex = '100';
}

function closePopUp () {
    popup.style.display = 'none';
    popupWindow.style.display = 'none';
}

// ------------------------------ EVENT LISTENERS -------------------

window.addEventListener('load', () => {
    popup.style.display = 'none';
    popupWindow.style.display = 'none';
    inputPages.value = 0;
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
    inputTitle = document.getElementById('title').value;
    inputAuthor = document.getElementById('author').value;
    inputPages = document.getElementById('pages').value;
    document.getElementById('yes').checked ? inputRead = true : inputRead = false;


    if ((inputTitle !== '') && (inputAuthor !== '') && (inputPages !== 0)
            && (inputRead !== '')) {
        // console.log(`${inputTitle}, ${inputAuthor}, ${inputPages}, ${inputRead}`);
        const newBook = new Book(inputTitle, inputAuthor, inputPages, inputRead);
        myLibrary.push(newBook);
        addBookToLibrary(myLibrary);
        document.getElementById('title').value = '';
        document.getElementById('author').value = '';
        document.getElementById('pages').value = 0;
        document.getElementById('yes').value = '';
        document.getElementById('no').value = '';
        closePopUp();
    }// if

    // Reset the variables
    inputTitle = '';
    inputAuthor = '';
    inputPages = 0;
    inputRead = '';
});