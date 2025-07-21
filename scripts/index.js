let  container = document.querySelector('.container');
let  bookTitle = document.querySelector('.title')
let  authorName = document.querySelector('.author')
let pages =document.querySelector('.pages')
let  submit = document.querySelector('.submit');
let  readStatus = document.querySelector('.status');
const bookDisplayArea = document.querySelector('#book-display-area');




const myLibrary = [];


function displayBooks(){
    bookDisplayArea.innerHTML = '';
    myLibrary.forEach(book => {
        // creating the storage card for books
        const bookCard = document.createElement('div');
        bookCard.classList.add('book-card');
        // getting book title
        const displayTitle = document.createElement('h3');
        displayTitle.textContent = book.title;
        // getting author name
        const authorDisplay = document.createElement('p');
        authorDisplay.textContent = `By: ${book.author}`;

        // REad status
        const displayRead = document.createElement('p');
        displayRead.textContent = `Status:${book.status}`;

        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.classList.add('remove-btn'); 
          
        removeButton.addEventListener('click', (event) => {
            event.preventDefault();
     
            const idToRemove = event.target.dataset.bookId;
      
            const newLibrary = myLibrary.filter(book => book.id !== idToRemove);
     
            myLibrary.length = 0;
            myLibrary.push(...newLibrary); 
      
      
      displayBooks();
    });
    const toggleButton = document.createElement('button');
    toggleButton.textContent = 'ToggleStatus';
    toggleButton.classList.add('toggle-btn');
    toggleButton.dataset.bookId = book.id;

    toggleButton.addEventListener('click', (event) => {
      const idToToggle = event.target.dataset.bookId;
 
      const bookToToggle = myLibrary.find(book => book.id === idToToggle);
      if (bookToToggle) {
        
        bookToToggle.toggleReadStatus();
      }
      
      displayBooks();
    });
  

        bookCard.appendChild(displayTitle);
        bookCard.appendChild(authorDisplay);
        bookCard.appendChild(displayRead);
        bookCard.appendChild(removeButton);
        bookCard.appendChild(toggleButton)
        removeButton.dataset.bookId = book.id;

        bookDisplayArea.appendChild(bookCard)

    })
}

function Book(title, author, status) {
  // the constructor...
  this.title = title;
  this.author = author;
  this.status = status;
  this.id = crypto.randomUUID();
  
}
Book.prototype.toggleReadStatus = function() {

  if (this.status === 'read') {
    this.status = 'unread';
  } else {
    this.status = 'read';
  }
};

function addBookToLibrary(title , author, status) {
  const newBook = new Book(title, author, status)
  myLibrary.push(newBook);

}
submit.addEventListener('click',(event) => {
    event.preventDefault();
    const title = bookTitle.value;
    const author = authorName.value;
    const readValue = readStatus.value;
    addBookToLibrary(title, author, readValue);
    
    displayBooks();
  

} )
