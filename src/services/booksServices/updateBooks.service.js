import { books } from "../../database";
import { booksPublic } from "../../database";

const updateBooksService = (owner_id, title, author, year) => {
  const myBookUpdated = {
    title,
    author,
    year,
  };

  const bookUpdated = {
    owner_id,
    title,
    author,
    year,
  };

  const bookIndex = books.findIndex((eachBook) => eachBook.title === title);
  const myBooksIndex = booksPublic.findIndex(
    (eachBook) => eachBook.title === title
  );

  if (bookIndex === -1) {
    return "Book not found.";
  }

  books[bookIndex] = { ...books[bookIndex], ...bookUpdated };
  booksPublic[myBooksIndex] = { ...books[bookIndex], ...myBookUpdated };

  return books[userIndex];
};

export default updateBooksService;
