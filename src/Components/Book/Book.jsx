import { Star } from 'lucide';
import React from 'react';
import { CiStar } from "react-icons/ci";
import { Link } from 'react-router';

const Book = ({ book }) => {
  // console.log(book)
  const { bookName, author, image, category, rating, tags,bookId } = book;
  return (
    <Link to={`/bookDetails/${bookId}`}>
      <div className="card bg-gray-100 w-[450px] shadow-sm p-10">
        <figure className='bg-gray-200 p-10 hover:bg-green-200'>
          <img className='W-[300px] h-[200px]'
            src={image}
            alt="Shoes" />
        </figure>
        <div className="card-body">
          <div>
            <h2 className="text-2xl font-semibold hover:bg-gray-300">
              {bookName}

            </h2>
            <div className='text-xl hover:bg-amber-100'>{author}</div>
          </div>
          <div className='flex justify-center gap-10 hover:bg-amber-200'>
            {
              tags.map(tag => <button>{tag}</button>)
            }
          </div>

          <div className="card-actions justify-end">
            <div className="badge badge-outline hover:bg-amber-300">{category}</div>
            <div className="badge badge-outline hover:bg-red-400">{rating} <CiStar className=' fill-amber-700' /></div>
          </div>
        </div>
      </div>

    </Link>
  );
};

export default Book;