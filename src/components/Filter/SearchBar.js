import React from 'react';

export const SearchBar = ({ searchTerm, setSearchTerm }) => (
  <div className="box ml-5">
    <input
      className="input"
      type='text'
      placeholder='Search'
      value={searchTerm}
      onChange={event => setSearchTerm(event.target.value)}
    />
  </div>
);
