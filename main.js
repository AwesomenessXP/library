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

function Book(title = '', author = '', pageNum = 0, isRead = false) { // the constructor
    this.title = title;
    this.author = author;
    this.pageNum = pageNum;
    this.isRead = isRead;
}

function addBookToLibrary (libraryArray) {
    if (libraryArray !== undefined) {
        // for (let i = 0; i < libraryArray.length; i++) {        }// for
            createCardElements(libraryArray[booksInLibrary]);
            booksInLibrary++;
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

    // display data to cards
    title.textContent = `${aBook.title}`;
    author.textContent = `${aBook.author}`;
    pageNum.textContent = `${aBook.pageNum}`;
    aBook.isRead ? isRead.textContent = "Read" : isRead.textContent = "Not read";

    // append book and its contents to the screen
    library.appendChild(bookCard);
    bookCard.appendChild(title);
    bookCard.appendChild(author);
    bookCard.appendChild(pageNum);
    bookCard.appendChild(isRead);
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

    console.log(inputRead);

    if ((inputTitle !== '') && (inputAuthor !== '') && (inputPages !== 0)) {
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