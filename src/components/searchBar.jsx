import axios from "axios";
import React, { useEffect, useState } from "react";
import { CardList } from "./cardList";
import { Link } from 'react-router-dom';

export const SearchBar = ({ addToBookshelf, bookshelf }) => {
  const [bookname, setBookName] = useState("");
  const [books, setBooks] = useState([]);

  const getBookData = async (bookname) => {
    if (bookname) {
      const res = await axios.get(
        `https://openlibrary.org/search.json?q=${bookname}&limit=10&page=1`
      );
      setBooks(res.data.docs);
      console.log("Data", res.data.docs);
    } else {
      setBooks([]);
    }
  };

  useEffect(() => {
    getBookData(bookname);
  }, [bookname]);

  return (
    <div className="w-full flex flex-col items-center gap-5 p-4 bg-gray-100 min-h-screen">
      <div className="w-full max-w-lg bg-blue-100 shadow-lg rounded-lg p-6">
        <label htmlFor="bookSearch" className="block text-lg font-medium text-gray-700 mb-2">
          Search Book Name
        </label>
        <input
          type="text"
          id="bookSearch"
          placeholder="Type the book name here..."
          value={bookname}
          onChange={(event) => setBookName(event.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="w-full max-w-6xl">
        <CardList books={books} addToBookshelf={addToBookshelf} bookshelf={bookshelf} />
      </div>
      <Link className="text-center px-6 py-3 mt-4 font-bold text-lg rounded-md hover:scale-95 transition-all duration-200 bg-yellow-50 text-richblack-800" to="/bookshelf">
        Go to My Bookshelf
      </Link>
    </div>
  );
};
