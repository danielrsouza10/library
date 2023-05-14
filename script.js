let library = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addToLibrary() {
  //a function that do library.push
}

const book1 = new Book("The lord of the rings", "Tolkien", 600, "yes");
const book2 = new Book("O mundo de sofia", "Jostein Gaarden", 500, "yes");
console.log(book1.title);
console.log(book2.author);

library.push(book1);
console.log(library);
