import React, { Suspense, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import Book from '../../Components/Book/Book';

const Books = ({ books }) => {
  const [allBooks, setAllBooks] = useState([]);

  // useEffect(()=>{
  //       fetch('bookData.json')
  //       .then(res => res.json())
  //       .then (data=> setAllBooks(data))
  // },[]);

  return (
    <div>
      <h1 className='text-5xl text-center font-semibold m-3'>Quantity : {books.length}</h1>

      <div className='grid grid-cols-3 p-5 mx-auto gap-5'>
        {
          books.map((book) => <Book key={book.bookId} book={book}></Book>)
        }

      </div>
    </div>
  );
};

export default Books;