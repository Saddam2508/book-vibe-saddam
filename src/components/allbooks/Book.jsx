import React from "react";
import { FaRegStar } from "react-icons/fa";
import { Link } from "react-router";

const Book = ({ book }) => {
  const { bookId, bookName, image, author, category, rating, tags } = book;
  return (
    <Link to={`/bookDetails/${bookId}`} className="card bg-base-100  shadow-md p-5 ">
      <figure className="p-6 bg-base-300">
        <img src={image} alt={bookName} className="rounded-xl h-[250px]"/>
      </figure>
      <div className="card-body">
        <div className="flex gap-5">
          {tags.map((tag) => (
            <div className="badge badge-success text-white" key={tag}>
              {tag}
            </div>
          ))}
        </div>
        <h2 className="card-title text-2xl font-bold">{bookName}</h2>
        <p>
         by : {author}
        </p>
        <div className="card-actions justify-between border-t border-dashed border-gray-300 pt-4">
          <div className="font-semibold">{category}</div>
          <div className="flex gap-2 justify-center items-center">{rating} <FaRegStar /></div>
        </div>
      </div>
    </Link>
  );
};

export default Book;
