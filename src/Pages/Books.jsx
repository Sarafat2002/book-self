import React, { useContext } from 'react'
import { BookContext } from '../ContextApi/BookProvider'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ListedBooks from '../Components/ListedBooks';
import WishList from '../Components/WishList';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { useState } from 'react';


const Books = () => {

  const { bookStore, wishlistStore } = useContext(BookContext);
  const [open, setOpen] = useState(false);
  const [short,setShort] = useState("");


  return (
    <div className='w-9/12 mx-auto my-10'>

      <div className='flex my-15 justify-center'>
        <div className='relative'>
          <button onClick={()=>setOpen(!open)} className='flex gap-2 font-medium items-center px-6 py-2 cursor-pointer border border-green-400'>
            Short <MdKeyboardArrowDown /> </button>
          {
            open && <ul className='absolute top-12 space-y-2'>
              <li className=' px-4 py-1 border border-green-400 ' onClick={()=>setShort('pages')} >Pages</li>
              <li className='px-4 py-1 border border-green-400' onClick={()=>setShort('rating')}>Rating</li>
            </ul>
          }
        </div>
      </div>


      <Tabs>
        <TabList>
          <Tab>ReadList</Tab>
          <Tab>WishList</Tab>
        </TabList>

        <TabPanel>
          <ListedBooks bookStore={bookStore} short={short} />
        </TabPanel>
        <TabPanel>
          <WishList wishlistStore={wishlistStore} short={short} />

        </TabPanel>
      </Tabs>

    </div>
  )
}

export default Books