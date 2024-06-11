import React from 'react';

const BookCard = ({ book, addToBookshelf, isAdded, removeFromBookShelf }) => {
  return (
    <div className="p-4 border-4 rounded border-blue-400 relative">
      <h3 className="text-xl font-bold">{book.title}</h3>
      <p className="text-sm text-gray-700">{book.author_name?.join(', ')}</p>
      <div className='flex flex-row justify-between'>
      {isAdded ? (
        <p className="mt-2 py-2 text-gray-500 text-sm">Added to Bookshelf</p>
      ) : (
        <button 
          className="mt-2 px-4 py-2 bg-blue-500 text-white rounded"
          onClick={() => addToBookshelf(book)}
        >
          Add to Bookshelf
        </button>
      )}
      {isAdded && removeFromBookShelf && (
        <button 
          className="mt-2 px-4 py-2 bg-red-500 text-white rounded"
          onClick={() => removeFromBookShelf(book.key)}
        >
          Remove
        </button>
      )}
</div>
    </div>
  );
};

export default BookCard;
