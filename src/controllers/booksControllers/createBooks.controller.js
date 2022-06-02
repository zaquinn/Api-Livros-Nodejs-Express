import createBooksService from "../../services/booksServices/createBooks.service";

const createBooksController = (request, response) => {
  const { title, author, year, owner_id } = request.body;

  const newBook = createBooksService(title, author, yaer, owner_id);

  return response.json(newBook);
};

export default createBooksController;
