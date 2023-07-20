import React from 'react';

const SearchBar = ({ handleSearch }) => {
  return (
    <div className="search-bar">
      <h2>A1</h2>
      <input
        type="text"
        placeholder="Search by ID, Name, Email"
        onChange={(e) => handleSearch(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;