import React, { useContext } from 'react'
import { BookContext } from '../ContextApi/BookProvider'


const Readonly = () => {

  return (
    <div className='w-9/12 mx-auto mt-10 '>

      <div className='bg-mauve-300 flex items-center justify-center rounded-xl'>

        <h4 className='p-50 text-4xl font-bold'>No Book Found</h4>

      </div>

    </div>
  )
}

export default Readonly