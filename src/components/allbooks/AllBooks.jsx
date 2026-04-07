import React, { use } from "react";
import Book from "./Book";

const booksPromise = fetch("/booksData.json").then((response) =>
  response.json(),
);

const AllBooks = () => {
  const books = use(booksPromise);

  return (
    <div className="container mx-auto">
      <h1 className="text-4xl text-center font-bold">Books</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {books.map((book) => (
          <Book key={book.bookId} book={book} />
        ))}
      </div>
    </div>
  );
};

export default AllBooks;
