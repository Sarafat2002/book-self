import React, { useContext } from 'react'
import { useLoaderData, useParams } from 'react-router'
import { BookContext } from '../ContextApi/BookProvider';

const BookDetails = () => {

  const { bookId } = useParams();

  const books = useLoaderData();
  const expactedBook = books.find((book) => book.bookId === Number(bookId));

  const {bookHandler,bookStore,wishlistStore,wishListHandler} = useContext(BookContext);
  console.log(bookHandler,bookStore,wishlistStore,wishListHandler);

  return (
    <div className='w-9/12 mx-auto my-10 rounded-lg'>

      <div className='grid grid-cols-2 gap-10'>
        <div className='bg-mauve-200 p-20 flex justify-center items-center rounded-lg'>
          <img className='h-137.5' src={expactedBook.image} alt="" />
        </div>
        <div className='space-y-6'>
          <h1 className='text-5xl font-medium pt-1'>{expactedBook.bookName}</h1>
          <h3 className='text-2xl font-medium'>By : {expactedBook.author}</h3>
          <hr />
          <p className='text-lg font-medium'>{expactedBook.category}</p>
          <hr />
          <p><span className='text-lg font-medium'>Review : </span>{expactedBook.review}</p>

          <div className='flex gap-10'>
            {
              expactedBook.tags.map((items, index) => {
                return (
                  <p className='bg-green-100 rounded-full px-5 p-1 text-green-900 font-medium' key={index}>{items}</p>
                )
              })
            }
          </div>
          <hr />
          <p>Number of Pages : <span className='text-lg font-medium' >{expactedBook.totalPages}</span></p>
          <p>Publisher : <span className='text-lg font-medium' >{expactedBook.publisher}</span></p>
          <p>Year of Publishing : <span className='text-lg font-medium' >{expactedBook.yearOfPublishing}</span> </p>
          <p>Rating : <span className='text-lg font-medium' > {expactedBook.rating}</span> </p>

          <div className='flex gap-5'>
            <button onClick={() => bookHandler(expactedBook)} className='border border-gray-300 px-4 py-2 rounded-md cursor-pointer'>Read</button>
            <button onClick={()=>wishListHandler(expactedBook)} className='bg-cyan-600 px-4 py-2 text-white rounded-md cursor-pointer'>Wishlist</button>
          </div>

        </div>
      </div>
    </div>
  )
}

export default BookDetails