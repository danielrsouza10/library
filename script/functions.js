let library = [];
let queue = [];

//constructor
function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  // this.read = read;
}

function addToLibrary(title, author, pages) {
  //a function that do library.push
  let book = new Book(title, author, pages);
  library.push(book);
  queue = book;
}

//a function to show all the books insert by default in the script
function showLibrary() {
  library.forEach((element) => {
    const list = document.querySelector("#card-container");
    const book = document.createElement("ul");
    const titleBook = document.createElement("li");
    const authorBook = document.createElement("li");
    const pagesBook = document.createElement("li");
    // const readBook = document.createElement("li");

    titleBook.innerText = "Title: " + element.title;
    authorBook.innerText = "Author: " + element.author;
    pagesBook.innerText = "Number of pages: " + element.pages;
    // readBook.innerText = "Read: " + element.read;

    list.appendChild(book);
    book.appendChild(titleBook);
    book.appendChild(authorBook);
    book.appendChild(pagesBook);
    // book.appendChild(readBook);
  });
}

function showLastBook() {
  const list = document.querySelector("#card-container");
  const book = document.createElement("ul");
  const titleBook = document.createElement("li");
  const authorBook = document.createElement("li");
  const pagesBook = document.createElement("li");
  // const readBook = document.createElement("li");

  titleBook.innerText = "Title: " + queue.title;
  authorBook.innerText = "Author: " + queue.author;
  pagesBook.innerText = "Number of pages: " + queue.pages;
  // readBook.innerText = "Read: " + element.read;

  // book.appendChild(readBook);
  list.appendChild(book);
  book.appendChild(titleBook);
  book.appendChild(authorBook);
  book.appendChild(pagesBook);
}

//some books just to test
addToLibrary("O Senhor dos Anéis", "Tolkien", 600, "lido");
addToLibrary("O Hobbit", "Tolkien", 350, "lido");
addToLibrary("Contos Inacabados", "Tolkien", 500, "Não lido");

showLibrary();

const button = document.querySelector("#add-to-library");
button.addEventListener("click", () => {
  let bookTitle = document.querySelector("#bookTitle").value;
  let bookAuthor = document.querySelector("#bookAuthor").value;
  let bookPages = document.querySelector("#bookPages").value;
  addToLibrary(bookTitle, bookAuthor, bookPages);

  showLastBook();
});
