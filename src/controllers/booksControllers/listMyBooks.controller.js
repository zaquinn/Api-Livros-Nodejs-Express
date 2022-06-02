import listMyBooksService from "../../services/booksServices/listMyBooks.service";

const listMyBooksController = (request, response) => {
  const { id } = request.params;

  const myBooks = listMyBooksService(id);

  return response.json(myBooks);
};

export default listMyBooksController;
