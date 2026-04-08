import React, { useContext, useEffect } from "react";
import { BookContext } from "../../context/BookContext";
import Book from "../allbooks/Book";

const Wishlist = ({ sortingType }) => {
  const { wishlist } = useContext(BookContext);
  const [filterWishlist, setFilterWishlist] = useState(wishlist);
  useEffect(() => {
    let sortedList = [...wishlist];

    if (sortingType === "pages") {
      sortedList.sort((a, b) => a.totalPages - b.totalPages);
    } else if (sortingType === "rating") {
      sortedList.sort((a, b) => b.rating - a.rating);
    }
    setFilterWishlist(sortedList);
  }, [sortingType]);

  if (wishlist.length === 0) {
    return (
      <div className="container mx-auto flex items-center justify-center h-[50vh] bg-gray-100 rounded-lg shadow-md">
        <h2 className="text-2xl text-center mt-10">Your wishlist is empty.</h2>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
      {wishlist.map((book) => (
        <Book key={book.bookId} book={book} />
      ))}
    </div>
  );
};

export default Wishlist;
