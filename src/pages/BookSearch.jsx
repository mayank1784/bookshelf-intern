import React, { useState, useCallback } from 'react';
import axios from 'axios';
import BookCard from '../components/BookCard';

const BookSearch = ({ addToBookshelf, bookshelf }) => {
  const [query, setQuery] = useState('');
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = useCallback(async (q) => {
    if (q.length > 2) {
      setLoading(true);
      try {
        const response = await axios.get(`https://openlibrary.org/search.json?q=${q}&limit=10&page=1`);
        setBooks(response.data.docs);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
      setLoading(false);
    } else {
      setBooks([]);
    }
  }, []);

  const handleChange = (e) => {
    const q = e.target.value;
    setQuery(q);
    handleSearch(q);
  };

  return (
    <div className="p-4">
      <input 
        type="text" 
        placeholder="Search for books..." 
        value={query}
        onChange={handleChange}
        className="w-full p-2 border rounded"
      />
      {loading && <div className="mt-4">Loading...</div>}
      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {books.map(book => (
          <BookCard 
            key={book.key} 
            book={book} 
            addToBookshelf={addToBookshelf} 
            isAdded={bookshelf.some(b => b.key === book.key)}
          />
        ))}
      </div>
    </div>
  );
};

export default BookSearch;
