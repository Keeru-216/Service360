import React, { useState } from 'react';
import '../Navigation/Navigationbar.css';
const SearchBar = () => {
  const [query, setQuery] = useState('');

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      // Trigger search logic here
      console.log(`Searching for: ${query}`);
      // You can add your search logic or API call here
    }
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Search..."
        className="search-input"
      />
    </div>
  );
};

export default SearchBar;
