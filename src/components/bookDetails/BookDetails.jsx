import React from 'react';
import { useLoaderData, useParams } from 'react-router';


const BookDetails = () => {
    const paramsId = useParams()
    const books = useLoaderData()
    const expectedBooks = books.find((book)=>book.bookId === Number(paramsId.id))
    const {bookName, image, author, category, rating, tags, review, totalPages, publisher, yearOfPublishing} = expectedBooks;
    return (
 <div className="grid grid-cols-2 bg-base-100 shadow-sm">
  <figure className='flex justify-center items-center bg-base-300 p-10'>
    <img
    className='h-full w-[350px] rounded-lg'
      src={image}
      alt={bookName} />
  </figure>
  <div className="card-body">
    <h2 className="card-title text-3xl">{bookName}</h2>
    <p> By: {author}</p>
    <p className='border-t border-b border-gray-300 py-2'>{category}</p>
    <p> <span className='font-bold'>Review :</span> {review}</p>
   <div className='flex gap-2'>
     <span className='font-bold'>Tag :</span>{tags.map((tag) => (
            <div className="badge badge-success text-white" key={tag}>
              {tag}
            </div>
          ))}
   </div>
   
    <div className="border-t border-gray-300 pt-3 space-y-3">
    <div className='flex justify-between items-center gap-2'>
    <span>Number of Pages :</span> <span>{totalPages}</span>
   </div>
   <div className='flex justify-between items-center gap-2'>
    <span>Publisher :</span> <span>{publisher}</span>
   </div>
   <div className='flex justify-between items-center gap-2'>
    <span>Year of Publishing :</span> <span>{yearOfPublishing}</span>
   </div>
   <div className='flex justify-between items-center gap-2'>
    <span>Rating :</span> <span>{rating}</span>
   </div>
      <div className='flex gap-3'>
        <button className="btn btn-primary">Read</button>
      <button className="btn btn-primary">Wishlist</button>
      </div>
    </div>
  </div>
</div>
    );
};

export default BookDetails;