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

addToLibrary("The lord of the rings", "Tolkien", 600, "yes");
addToLibrary("O mundo de sofia", "Jostein Gaarden", 500, "yes");

const list = document.querySelector("#card-container");
const book1 = document.createElement("ul");
const titleBook1 = document.createElement("li");
const authorBook1 = document.createElement("li");
const pagesBook1 = document.createElement("li");
const readBook1 = document.createElement("li");

titleBook1.innerText = "Title: " + library[0].title;
authorBook1.innerText = "Author: " + library[0].author;
pagesBook1.innerText = "Number of pages: " + library[0].pages;
readBook1.innerText = "Read: " + library[0].read;

list.appendChild(book1);
book1.appendChild(titleBook1);
book1.appendChild(authorBook1);
book1.appendChild(pagesBook1);
book1.appendChild(readBook1);
