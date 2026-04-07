import React from "react";

const Book = ({ book }) => {
  const { bookName, image, author, category, rating, tags } = book;
  return (
    <div className="card bg-base-100 w-96 shadow-sm">
      <figure>
        <img src={image} alt={bookName} />
      </figure>
      <div className="card-body">
        <div className="flex gap-5">
          {tags.map((tag) => (
            <div className="badge badge-success" key={tag}>
              {tag}
            </div>
          ))}
        </div>
        <h2 className="card-title">{bookName}</h2>
        <p>
          A card component has a figure, a body part, and inside body there are
          title and actions parts
        </p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">Fashion</div>
          <div className="badge badge-outline">Products</div>
        </div>
      </div>
    </div>
  );
};

export default Book;
