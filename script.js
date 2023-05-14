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

console.log(library);

// const cardContainer = document.querySelector("#card-container");
// const cards = document.createElement("div");
// cards.className = "cards";
// cards.innerHTML = "Title: " + book1.title;

// cardContainer.appendChild(cards);
