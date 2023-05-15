let library = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addToLibrary(title, author, pages, read) {
  //a function that do library.push
  let book = new Book(title, author, pages, read);
  library.push(book);
}

addToLibrary("O Senhor dos Anéis", "Tolkien", 600, "lido");
addToLibrary("O Hobbit", "Tolkien", 350, "lido");
addToLibrary("Contos Inacabados", "Tolkien", 500, "Não lido");

library.forEach((element) => {
  for (let i = 0; i <= library.length; i++) {
    const list = document.querySelector("#card-container");
    const book = document.createElement("ul");
    const titleBook = document.createElement("li");
    const authorBook = document.createElement("li");
    const pagesBook = document.createElement("li");
    const readBook = document.createElement("li");

    titleBook.innerText = "Title: " + library[i].title;
    authorBook.innerText = "Author: " + library[i].author;
    pagesBook.innerText = "Number of pages: " + library[i].pages;
    readBook.innerText = "Read: " + library[i].read;

    list.appendChild(book);
    book.appendChild(titleBook);
    book.appendChild(authorBook);
    book.appendChild(pagesBook);
    book.appendChild(readBook);
  }
});
