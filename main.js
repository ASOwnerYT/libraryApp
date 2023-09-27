let myLibrary = [
  new Book('The Hobbit', 'J.R.R. Tolkien', 295, false),
  new Book('1984', 'George Orwell', 304, true),
];

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

function markAsRead(book) {
  book.read = !book.read;
  displayBooks();
}

function displayBooks() {
  document.querySelector('#myLibrary').innerHTML = myLibrary
    .map(
      (book) =>
        `<article>
        <h2>${book.title}</h2>
        <p>${book.author}</p>
        <p>${book.pages} pages</p>
        <p>${book.read ? 'Already read' : 'Unread'}</p>
        <footer>
          <button onclick="markAsRead(book)">Mark as read</button>
          <button class="secondary">Remove</button>
        </footer>
      </article>`
    )
    .join('');
}

displayBooks();

console.log(theHobbit.info());
