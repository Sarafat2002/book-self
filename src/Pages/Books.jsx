import React, { useContext } from 'react'
import { BookContext } from '../ContextApi/BookProvider'


const Books = () => {

  const check = useContext(BookContext);
  console.log(check)

  return (
    <div>
      <h1>Upcomming next lesson</h1>
    </div>
  )
}

export default Books