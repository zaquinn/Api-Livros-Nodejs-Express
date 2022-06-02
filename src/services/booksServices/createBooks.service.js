import { books } from "../../database";
import { booksPublic } from "../../database";

const createBooksService = (title, author, year, owner_id) => {
  const newBook = {
    title,
    author,
    year,
    owner_id,
  };

  const newBookPublic = {
    title,
    author,
    year,
  };

  books.push(newBook);
  booksPublic.push(newBookPublic);

  return newBook;
};

export default createBooksService;
