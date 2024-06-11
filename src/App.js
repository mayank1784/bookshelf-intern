import React, { useState, useCallback } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/NavBar';
import BookSearch from './pages/BookSearch';
import MyBookshelf from './pages/MyBookShelf';

const App = () => {
  const [bookshelf, setBookshelf] = useState(JSON.parse(localStorage.getItem('bookshelf')) || []);

  
  const addToBookshelf = useCallback((book) => {
    const updatedBookshelf = [...bookshelf, book];
    setBookshelf(updatedBookshelf);
    localStorage.setItem('bookshelf', JSON.stringify(updatedBookshelf));
  }, [bookshelf]);

  const removeFromBookshelf = useCallback((key) => {
    const updatedBookshelf = bookshelf.filter(book => book.key !== key);
    setBookshelf(updatedBookshelf);
    localStorage.setItem('bookshelf', JSON.stringify(updatedBookshelf));
  }, [bookshelf]);

  const clearBookshelf = useCallback(() => {
    setBookshelf([]);
    localStorage.removeItem('bookshelf');
  }, []);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<BookSearch addToBookshelf={addToBookshelf} bookshelf={bookshelf} />} />
        <Route path="/bookshelf" element={<MyBookshelf bookshelf={bookshelf} removeFromBookshelf={removeFromBookshelf} clearBookshelf={clearBookshelf} />} />
      </Routes>
    </Router>
  );
};

export default App;
