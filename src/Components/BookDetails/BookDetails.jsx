import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import { addToStorageDB } from '../Utility/addToDb';


const BookDetails = () => {
  const {id} = useParams();
  const bookId = parseInt(id);
  const data  = useLoaderData();
  const book = data.find(book => book.bookId===bookId) ;
  // console.log(book)
  const handleMarkAsRead = id => {

    addToStorageDB(id);
  }
  const { bookName, author, image, category } = book;


  return (
    <div className='border-amber-300 p-10 flex-col justify-center items-center bg-blue-200 w-[400px] mx-auto m-10'>
      <img className='w-[200px]' src={image} alt="" />
      <h1 className='text-2xl'>{bookName}</h1>
      <p>{author}</p>
      <p className='font-semibold'>{category}</p>
      <button onClick={()=>handleMarkAsRead(id)} className='btn btn-accent  mr-5'>Mark as Read</button>
      <button className='btn btn-accent'>Add To Wishlist</button>

    </div>
  );
};

export default BookDetails;