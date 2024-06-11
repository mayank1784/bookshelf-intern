import React from 'react';
import BookCard from '../components/BookCard';

const MyBookshelf = ({ bookshelf, removeFromBookshelf, clearBookshelf }) => {
  return (
    <div className="p-4">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">My Bookshelf</h2>
        <button 
          className="px-4 py-2 bg-red-500 text-white rounded"
          onClick={clearBookshelf}
        >
          Clear Bookshelf
        </button>
      </div>
      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {bookshelf.map((book, index) => (
          <BookCard 
            key={index} 
            book={book} 
            isAdded 
            removeFromBookShelf={removeFromBookshelf}
          />
        ))}
      </div>
    </div>
  );
};

export default MyBookshelf;
