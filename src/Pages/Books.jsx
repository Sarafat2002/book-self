import React, { useContext } from 'react'
import { BookContext } from '../ContextApi/BookProvider'


const Books = () => {

  const {bookStore,wishlistStore} = useContext(BookContext);
  console.log(bookStore,wishlistStore);

  return (
    <div>
      <h1>Upcomming next lesson</h1>
    </div>
  )
}

export default Books