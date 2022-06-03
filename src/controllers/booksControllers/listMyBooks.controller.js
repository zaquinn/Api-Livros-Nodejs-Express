import listMyBooksService from "../../services/booksServices/listMyBooks.service";

const listMyBooksController = (request, response) => {
  const { owner_id } = request.params;

  const myBooks = listMyBooksService(owner_id);

  return response.json(myBooks);
};

export default listMyBooksController;
