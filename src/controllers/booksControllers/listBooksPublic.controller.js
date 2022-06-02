import listBooksPublicService from "../../services/booksServices/listBooksPublic.service";

const listBooksPublicController = (request, response) => {
  const books = listBooksPublicService();

  return response.json(books);
};

export default listBooksPublicController;
