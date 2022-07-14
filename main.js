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
let addBookBtn = document.getElementById("add-book-btn");
let popupWindow = document.getElementById('popup-window');
let popup = document.getElementById('popup');


// ----------------------------- OBJECTS/FUNCTIONS -------------------------

function Book(title, author, pageNum, isRead) { // the constructor
    this.title = title;
    this.author = author;
    this.pageNum = pageNum;
    this.isRead = isRead;
}

// function addBookToLibrary {

// }

function renderPopUp () {
    popup.style.display = 'flex';
    popup.style.backgroundColor = 'rgba(0, 0, 0, 0.233)';
    popup.style.zIndex = '100';
}

// ------------------------------ EVENT LISTENERS -------------------

window.addEventListener('load', () => {
    popup.style.display = 'none';
});

addBookBtn.addEventListener('click', () => {
    //before we add the book, we need to input data
    renderPopUp();
    let newBook = new Book();
});


