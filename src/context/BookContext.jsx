import React, { createContext,  useState } from "react";
import { toast } from "react-toastify";
import { addReadListToLocalDB, addWishListToLocalDB, getAllReadListFromLocalDB, getAllWishListFromLocalDB } from "../utils/localDB";

export const BookContext = createContext();

const BookProvider = ({ children }) => {
  const [isRead, setIsRead] = useState(()=>getAllReadListFromLocalDB());
  const [wishlist, setWishlist] = useState(()=>getAllWishListFromLocalDB());



  const handleMarkAsRead = (currentBook) => {

    addReadListToLocalDB(currentBook)

    const existingRead = isRead.find(
      (book) => book.bookId === currentBook.bookId,
    );

    if (!existingRead) {
      setIsRead([...isRead, currentBook]);
      toast.success(`${currentBook.bookName} marked as read!`);
    } else {
      toast.error(`${currentBook.bookName} is already marked as read.`);
    }
  };

  const handleAddToWishlist = (currentBook) => {

    addWishListToLocalDB(currentBook)

    const existingWishlist = wishlist.find(
      (book) => book.bookId === currentBook.bookId,
    );

    const existInReadList = isRead.find(
      (book) => book.bookId === currentBook.bookId,
    );

    if (existInReadList) {
      toast.error(
        `${currentBook.bookName} is already marked as read. You can't add it to wishlist.`,
      );
      return;
    }

    if (!existingWishlist) {
      setWishlist([...wishlist, currentBook]);
      toast.success(`${currentBook.bookName} added to wishlist!`);
    } else {
      toast.error(`${currentBook.bookName} is already in your wishlist.`);
    }
  };



  const data = {
    isRead,
    setIsRead,
    handleMarkAsRead,
    wishlist,
    setWishlist,
    handleAddToWishlist,
  };

  return <BookContext.Provider value={data}>{children}</BookContext.Provider>;
};

export default BookProvider;
