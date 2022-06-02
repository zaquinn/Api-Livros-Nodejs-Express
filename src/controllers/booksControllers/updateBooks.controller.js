import updateBooksService from "../../services/booksServices/updateBooks.service";

const updateBooksController = (request, response) => {
  const { id } = request.params;
  const { title, author, year } = request.body;

  const updatedBook = updateUserService(id, title, author, year);

  return response.json(updatedBook);
};

export default updateBooksController;
