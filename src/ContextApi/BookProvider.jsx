import React, { Children, createContext } from 'react'
import { useContext, useState } from 'react'
import { toast } from 'react-toastify';

export const BookContext = createContext();

const BookProvider = ({ children }) => {


  const [bookStore, setBookStore] = useState([]);


  const bookHandler = (currentBook) => {

    const newStore = bookStore.find((items) => items.bookId === currentBook.bookId)
    console.log(currentBook)
    if (newStore) {
      toast.error("the book is already read ")
    } else {
      setBookStore([...bookStore, currentBook]);
      toast.success(`${currentBook.bookName}`);
    }

  }


  const data = {
    bookStore,
    setBookStore,
    bookHandler,
  };


  return (
    <BookContext.Provider value={data}>
      {children}
    </BookContext.Provider>
  )
}

export default BookProvider