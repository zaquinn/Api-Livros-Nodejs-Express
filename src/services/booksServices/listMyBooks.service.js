import { books } from "../../database";

const listMyBooksService = (owner_id) => {
  const myBooks = books.filter((eachBook) => eachBook.owner_id === owner_id);

  if (myBooks.length === 0) {
    return "User not found or user didn't registered any books.";
  }

  return myBooks;
};

export default listMyBooksService;
