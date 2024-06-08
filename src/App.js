import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { SearchBar } from "./components/searchBar";
import { CardShelf } from "./components/cardShelf";

const App = () => {
  const [bookshelf, setBookshelf] = useState([]);

  useEffect(() => {
    const savedBooks = JSON.parse(localStorage.getItem("bookshelf"));
    if (savedBooks) {
      setBookshelf(savedBooks);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("bookshelf", JSON.stringify(bookshelf));
  }, [bookshelf]);

  const addToBookshelf = (book) => {
    setBookshelf([...bookshelf, book]);
  };

  const removeFromBookshelf = (book) => {
    setBookshelf(bookshelf.filter((b) => b.key !== book.key));
  };

  return (
   
     <Routes>
      <Route
        path="/"
        element={<SearchBar addToBookshelf={addToBookshelf} bookshelf={bookshelf} />}
      />
      <Route
        path="/bookshelf"
        element={
          <CardShelf
            bookshelf={bookshelf}
            removeFromBookshelf={removeFromBookshelf}
          />
        }
      />
    </Routes>
  );
};

export default App;
