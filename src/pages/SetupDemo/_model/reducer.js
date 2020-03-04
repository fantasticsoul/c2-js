import * as bookServ from "../../../services/book";

export async function getBooks(payload, moduleState, action) {
  await action.setState({ loading: true, books: [] });
  const { data: books } = await bookServ.getBooks();
  return { books, loading: false };
}
