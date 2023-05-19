let library = [];
let queue = [];

//constructor
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
  queue = book;
}

//a function to show all the books insert by default in the script
function showLibrary() {
  library.forEach((element) => {
    const list = document.querySelector("#card-container");
    const book = document.createElement("table");
    const titleBook = document.createElement("th");
    const authorBook = document.createElement("tr");
    const pagesBook = document.createElement("tr");
    const readBook = document.createElement("tr");

    titleBook.innerText = element.title;
    authorBook.innerText = "Escritor: " + element.author;
    pagesBook.innerText = "Páginas: " + element.pages;
    readBook.innerText = "Já leu? " + element.read;

    list.appendChild(book);
    book.appendChild(titleBook);
    book.appendChild(authorBook);
    book.appendChild(pagesBook);
    book.appendChild(readBook);
  });
}

function showLastBook() {
  const list = document.querySelector("#card-container");
  const book = document.createElement("table");
  const titleBook = document.createElement("th");
  const authorBook = document.createElement("tr");
  const pagesBook = document.createElement("tr");
  const readBook = document.createElement("tr");

  titleBook.innerText = queue.title;
  authorBook.innerText = "Escritor: " + queue.author;
  pagesBook.innerText = "Páginas: " + queue.pages;
  readBook.innerText = "Já leu? " + queue.read;

  list.appendChild(book);
  book.appendChild(titleBook);
  book.appendChild(authorBook);
  book.appendChild(pagesBook);
  book.appendChild(readBook);
}

//some books just to test
addToLibrary("O Senhor dos Anéis", "J.R.R. Tolkien", 1232, "Sim");
addToLibrary("O Hobbit", "J.R.R. Tolkien", 336, "Sim");
addToLibrary("Contos Inacabados", "J.R.R. Tolkien", 528, "Não");

showLibrary();

const button = document.querySelector("#add-to-library");
button.addEventListener("click", () => {
  let bookTitle = document.querySelector("#bookTitle").value;
  let bookAuthor = document.querySelector("#bookAuthor").value;
  let bookPages = document.querySelector("#bookPages").value;
  let bookRead = document.querySelector("input[name='read']:checked").value;
  addToLibrary(bookTitle, bookAuthor, bookPages, bookRead);

  showLastBook();
});
