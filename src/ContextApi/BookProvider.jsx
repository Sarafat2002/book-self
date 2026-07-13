import React, { Children, createContext } from 'react'
import { useContext, useState } from 'react'
import { toast } from 'react-toastify';
import { getAllReadlistDb, addLocalReadlist, addLocalWishlist, getWishlistDb } from '../LocalDb/LocalStore.js'

export const BookContext = createContext();

const BookProvider = ({ children }) => {


  const [bookStore, setBookStore] = useState(() => getAllReadlistDb());
  const [wishlistStore, setWishlistStore] = useState(() => getWishlistDb());


  const bookHandler = (currentBook) => {


    const isStore = wishlistStore.find((items) => items.bookId === currentBook.bookId)

    if (isStore) {
      toast.error("the book is already wishlist ");
      return
    }

    const newStore = bookStore.find((items) => items.bookId === currentBook.bookId)

    if (newStore) {
      toast.error("the book is already read ");
      return
    } else {
      addLocalReadlist(currentBook);
      setBookStore(getAllReadlistDb());
      toast.success(`${currentBook.bookName}`);
    }

  }
  const wishListHandler = (currentBook) => {

    const isWishStore = bookStore.find((items) => items.bookId === currentBook.bookId);

    if (isWishStore) {
      toast.error("this book is already readlist");
      return;
    }

    const newWishStore = wishlistStore.find((items) => items.bookId === currentBook.bookId);

    if (newWishStore) {
      toast.error("the book is already wishlist");
    } else {
      addLocalWishlist(currentBook);
      setWishlistStore(getWishlistDb());
      toast.success(`${currentBook.bookName}`);
    }

  }


  const data = {
    bookStore,
    setBookStore,
    bookHandler,
    wishlistStore,
    wishListHandler
  };


  return (
    <BookContext.Provider value={data}>
      {children}
    </BookContext.Provider>
  )
}

export default BookProvider