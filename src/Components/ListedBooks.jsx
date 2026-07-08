import React, { useContext } from 'react'
import { BookContext } from '../ContextApi/BookProvider'
import { IoDocumentTextOutline, IoLocationOutline } from 'react-icons/io5';
import { FaUserFriends } from 'react-icons/fa';

const ListedBooks = () => {

    const { bookStore, wishlistStore } = useContext(BookContext);
    console.log(bookStore, wishlistStore);

    return (
        <div className='border border-gray-200 p-9'>
            {
                bookStore?.map((book) => {
                    return (
                        <div key={book.id} className='flex gap-10 space-y-6  '>
                            <div className='bg-mauve-300 p-6 flex justify-center items-center rounded-lg w-80'>
                                <img src={book.image} className='h-50' alt="" />
                            </div>
                            <div>
                                <div className='mt-5'>
                                    <h2 className='font-bold text-xl'>{book.bookName}</h2>
                                    <h4 className='font-medium text-lg pt-2' > By : {book.author}</h4>
                                </div>
                                <div className='flex gap-3 pt-2'>
                                    {
                                        book.tags.map((item, ind) => {
                                            return (
                                                <p className='bg-green-100 rounded-full px-5 p-1 text-green-900 font-medium' key={ind}>{item}</p>
                                            )
                                        })
                                    }
                                </div>
                                <div className='flex gap-3 pt-2'>
                                    <p className='flex gap-2 items-center'> <FaUserFriends /> By : {book.publisher}</p>
                                    <p className='flex gap-2 items-center' > <IoDocumentTextOutline /> {book.totalPages}</p>
                                </div>
                                <hr className='text-gray-300 my-3' />

                                <div className='flex gap-5 items-center'>
                                    <p className='bg-green-100 rounded-full px-5 p-1 text-green-900 font-medium ' >Category : {book.category}</p>
                                    <p className='bg-green-100 rounded-full px-5 p-1 text-green-900 font-medium ' >Rating : {book.rating}</p>
                                    <button className='px-4 py-1 bg-green-600 text-white rounded-full'>View Details</button>
                                </div>

                            </div>



                        </div>
                    )
                })
            }
        </div>
    )
}

export default ListedBooks