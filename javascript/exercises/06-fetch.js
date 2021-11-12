const url = "https://anapioficeandfire.com/api/books/";

const app = document.querySelector("#books");

const fetchData = (url) => {
  // Fetch all books from the API of Ice and Fire and append them to the DOM
  // Create an element for each book that contains title, author, publication year, and number of pages
  // Update the styles in JavaScript to center all the books in the container given
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);

      data.forEach((item) => {
        let book = document.createElement("h2");
        let authors = document.createElement("p");
        let year = document.createElement("p");
        let pages = document.createElement("p");

        book.textContent = item.name;
        authors.textContent = `by ${item.authors}`;
        year.textContent = item.released.substring(0, 4);
        pages.textContent = `${item.numberOfPages} pages`;

        app.append(book);
        app.append(authors);
        app.append(year);
        app.append(pages);
      });
    })
    .catch((error) => console.log("Request Failed", error))
    .finally(() => app.removeChild(loading));
};

fetchData(url);
