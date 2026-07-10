import React, { useContext } from 'react'
import { BookContext } from '../ContextApi/BookProvider'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ListedBooks from '../Components/ListedBooks';
import WishList from '../Components/WishList';
import { MdKeyboardArrowDown } from 'react-icons/md';


const Books = () => {

  const { bookStore, wishlistStore } = useContext(BookContext);


  return (
    <div className='w-9/12 mx-auto my-10'>

      <div className='flex my-10 justify-center'>
        <div className=''>
          <h4 className='flex gap-2 items-center border border-green-400 px-6 py-2'>  short <MdKeyboardArrowDown/> </h4>
          <ul className=''>
            <li><a href="">pages</a></li>
            <li><a href="">rating</a></li>
          </ul>
        </div>
      </div>


      <Tabs>
        <TabList>
          <Tab>ReadList</Tab>
          <Tab>WishList</Tab>
        </TabList>

        <TabPanel>
          <ListedBooks bookStore={bookStore} />
        </TabPanel>
        <TabPanel>
          <WishList wishlistStore={wishlistStore} />

        </TabPanel>
      </Tabs>

    </div>
  )
}

export default Books