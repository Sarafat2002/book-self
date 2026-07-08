import React, { useContext } from 'react'
import { BookContext } from '../ContextApi/BookProvider'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ListedBooks from '../Components/ListedBooks';
import WishList from '../Components/WishList';


const Books = () => {

  const { bookStore, wishlistStore } = useContext(BookContext);


  return (
    <div className='w-9/12 mx-auto my-10'>


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