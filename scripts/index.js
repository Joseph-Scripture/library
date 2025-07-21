let  container = document.querySelector('.container');
let  bookTitle = document.querySelector('.title')
let  authorName = document.querySelector('.author')
let pages =document.querySelector('.pages')
let  submit = document.querySelector('.submit');
let  readStatus = document.querySelector('.status')




const myLibrary = [];

function Book(title, author, status) {
  // the constructor...
  this.title = title;
  this.author = author;
  this.status = status;
  this.id = crypto.randomUUID()
}

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
    console.log("A book was added to the library!");
    console.log(myLibrary);
    bookTitle.value = '';
    authorName.value = '';
    readStatus.value = '';
    pages.value = '';
  

} )
