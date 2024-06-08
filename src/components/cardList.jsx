import React from "react";
import { Card } from "./card";

export const CardList = ({ books ,addToBookshelf,removeFromBookshelf,bookshelf}) => {
  return (
    <div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 p-2 mx-auto max-w-6xl">
      {books.map((book, index) => (
        <Card key={index} book={book} addToBookshelf={addToBookshelf} removeFromBookshelf={removeFromBookshelf} isInBookshelf={bookshelf.some((b) => b.key === book.key)}/>
      ))}
    </div>
  );
};
