import updateBooksService from "../../services/booksServices/updateBooks.service";

const updateBooksController = (request, response) => {
  const { owner_id } = request.params;
  const { title, author, year } = request.body;

  const updatedBook = updateBooksService(owner_id, title, author, year);

  return response.json(updatedBook);
};

export default updateBooksController;
