import React from 'react'
import { useLoaderData, useParams } from 'react-router'

const BookDetails = () => {

  const { bookId } = useParams();
  console.log(bookId);

  const books = useLoaderData();
  const expactedBook = books.find((book) => book.bookId === Number(bookId))
  console.log(expactedBook);


  return (
    <div className='w-9/12 mx-auto my-15 rounded-lg'>

       <div className='grid grid-cols-2 gap-10'>
        <div className='bg-mauve-200 p-20 flex justify-center items-center rounded-lg'>
        <img src={expactedBook.image} alt="" />
      </div>
      <div className='space-y-7'>
        <h1 className='text-5xl font-medium pt-5'>{expactedBook.bookName}</h1>
        <h3 className='text-2xl font-medium'>By : {expactedBook.author}</h3>
        <hr />
        <p className='text-lg font-medium'>{expactedBook.category}</p>
        <hr />
        <p><span className='text-lg font-medium'>Review : </span>{expactedBook.review}</p>

        <div className='flex justify-between'>
          {
            expactedBook.tags.map((items,index)=>{
              <p key={index}>{items}</p>
            })
          }
        </div>
        <hr />
        <p>Number of Pages : <span className='text-lg font-medium' >{expactedBook.totalPages}</span></p>
        <p>Publisher : <span className='text-lg font-medium' >{expactedBook.publisher}</span></p>
        <p>Year of Publishing : <span className='text-lg font-medium' >{expactedBook.yearOfPublishing}</span> </p>
        <p>Rating : <span className='text-lg font-medium' > {expactedBook.rating}</span> </p>

        <div className='flex gap-5'>
          <button className='border border-gray-300 px-4 py-2 rounded-md'>Read</button>
          <button className='bg-cyan-600 px-4 py-2 text-white rounded-md'>Wishlist</button>
        </div>

      </div>
       </div>
    </div>
  )
}

export default BookDetails