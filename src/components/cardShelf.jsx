import React from 'react';
import { Card } from "./card";
import { Link } from 'react-router-dom';

export const CardShelf = ({ bookshelf, removeFromBookshelf }) => {
  if (bookshelf.length === 0) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-center font-bold text-3xl py-4">
          Empty Bookshelf
        </div>
        <Link
        className="text-center px-6 py-3 mt-4 mb-4 font-bold text-lg rounded-md hover:scale-95 transition-all duration-200 bg-yellow-50 text-richblack-800"
        to="/"
      >
        Back to Search
      </Link>
      </div>
    );
  }
  return (
    <div className="flex flex-col min-h-screen items-center justify-between mx-auto max-w-6xl">
      <div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 p-2 mx-auto w-full mt-10">
        {bookshelf.map((book, index) => (
          <Card
            key={index}
            book={book}
            removeFromBookshelf={removeFromBookshelf}
            isInBookshelf={bookshelf.some((b) => b.key === book.key)}
          />
        ))}
      </div>
      <Link
        className="text-center px-6 py-3 mt-4 mb-4 font-bold text-lg rounded-md hover:scale-95 transition-all duration-200 bg-yellow-50 text-richblack-800"
        to="/"
      >
        Back to Search
      </Link>
    </div>
  );
};
