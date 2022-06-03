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

  const bookIndex = books.findIndex(
    (eachBook) => eachBook.owner_id === owner_id
  );

  if (bookIndex === -1) {
    return "Book not found.";
  }

  books[bookIndex] = { ...books[bookIndex], ...bookUpdated };
  booksPublic[bookIndex] = { ...booksPublic[bookIndex], ...myBookUpdated };

  return books[bookIndex];
};

export default updateBooksService;
