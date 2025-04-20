import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredBook } from '../../Components/Utility/addToDb';
import Book from '../../Components/Book/Book';
const ReadList = () => {
  const[readList, setReadList] = useState([]);
  const data = useLoaderData();

  useEffect(()=>{
    const storedBookData = getStoredBook();
   const convertedStoredBooks = storedBookData.map(id => parseInt(id));
   const myReadList = data.filter(book => convertedStoredBooks.includes(book.bookId));
   setReadList(myReadList)
  },[])
;
  return (
    <div>
      <Tabs>
        <TabList>
          <Tab>Read Book List</Tab>
          <Tab>WishList</Tab>
        </TabList>

        <TabPanel>
          <h2>{ReadList.length}</h2>
          {
            readList.map(b=><Book book={b}></Book>)
          }
        </TabPanel>
        <TabPanel>
          <h2>Wish List</h2>
        </TabPanel>
      </Tabs>

    </div>
  );
};

export default ReadList;