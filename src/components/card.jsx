import React from "react";

export const Card = ({ book, isInBookshelf, addToBookshelf, removeFromBookshelf }) => {
  const authorName = book.author_name ? book.author_name[0] : "Unknown";
  const truncatedTitle = book.title
    ? book.title.split(" ").slice(0, 5).join(" ") + (book.title.split(" ").length > 5 ? "..." : "")
    : "No Title";

  return (
    <div className="bg-white shadow-md rounded p-4 text-richblack-800 items-center">
      <div className="font-bold text-xl mb-2">Title: {truncatedTitle}</div>
      <div className="mb-2">Author: {authorName}</div>
      <div className="mb-2">Rating: {book.ratings_average}</div>
      <div className="flex flex-row justify-between">
        <div>Type: {book.type}</div>
        <div>Edition Count: {book.edition_count}</div>
      </div>
      {isInBookshelf ? (
        <button
          onClick={() => removeFromBookshelf(book)}
          className="text-center px-6 py-3 mt-4 font-bold text-lg rounded-md hover:scale-95 transition-all duration-200 bg-yellow-50  text-richblack-800"
        >
          Remove from bookshelf
        </button>
      ) : (
        <button
          onClick={() => addToBookshelf(book)}
          className="text-center px-6 py-3 mt-4 font-bold text-lg rounded-md hover:scale-95 transition-all duration-200 bg-yellow-50 text-richblack-800"
        >
          Add to bookshelf
        </button>
      )}
    </div>
  );
};
