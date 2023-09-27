const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 295, false);
let myLibrary = [theHobbit, new Book('1984', 'Georce Orwell', 304, true)];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;

  this.info = function () {
    return `${title} by ${author}, ${pages} pages, ${
      read ? 'read' : 'not read yet'
    }`;
  };
}

function addBookToLibrary() {
  // TODO
}

function displayBooks() {
  // TODO
}

console.log(theHobbit.info());
