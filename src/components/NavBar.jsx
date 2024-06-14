import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="p-4 bg-gray-800 text-white flex justify-between">
      <Link to="/">Book Search</Link>
      <Link to="/bookshelf">My Bookshelf</Link>
      <Link to='/productListing'>Product Listing</Link>
    </nav>
  );
};

export default Navbar;
