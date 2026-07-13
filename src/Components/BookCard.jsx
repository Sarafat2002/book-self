import React, { useEffect, useState } from 'react'
import { FaRegStar } from 'react-icons/fa';
import { NavLink } from 'react-router';
import BookDetails from '../Pages/BookDetails';

const BookCard = () => {

    const [bookData, setBookData] = useState([]);

    useEffect(() => {
        fetch("/booksData.json")
            .then(res => res.json())
            .then(data => setBookData(data))
    }, [])

    return (
        <div className='w-9/12 mx-auto'>
            <div className='flex justify-center text-center'>
                <h2 className='text-3xl font-bold'>Books</h2>
            </div>

            <div className='grid grid-cols-3 gap-10'>

                {
                    bookData.map((book) => {

                        return (
                            <NavLink to={`/bookDetails/${book.bookId}`} className='mt-10 p-10 border border-gray-200 rounded-md' key={book.bookId}>
                                <div className='bg-mauve-200 rounded-md p-5 flex items-center justify-center '>
                                    <img className='h-75' src={book.image} alt="" />
                                </div>

                                    <div className='flex justify-between  pt-10'>
                                        {
                                        book?.tags?.map((tag, index) => {
                                            return (
                                                <p className='bg-green-100 px-4 py-1 rounded-full text-green-900 font-medium' key={index}>{tag}</p>
                                            )
                                        })
                                    }
                                    </div>

                                <div>
                                    <h3 className='text-2xl font-bold py-6'>{book.bookName}</h3>
                                    <p className='text-xl font-medium'>By : {book.author}</p>
                                </div>
                                <hr className="border-t-2 border-dashed border-gray-300 my-6" />

                                <div className='flex justify-between'>
                                    <p>{book.category}</p>
                                    <p className='flex gap-2 justify-center items-center'>{book.rating} <FaRegStar /></p>
                                </div>

                            </NavLink>
                            
                        )
                    })
                }
            </div>
        </div>
    )
}

export default BookCard