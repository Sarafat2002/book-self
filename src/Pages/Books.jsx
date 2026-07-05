import React from 'react'
import { useLoaderData } from 'react-router'

const Books = () => {
  const books = useLoaderData();
  console.log(books,"books")
  return (
    <div>
      <h1>Upcomming next lission</h1>
    </div>
  )
}

export default Books