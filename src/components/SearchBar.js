import React from 'react';

export const SearchBar = (props) => (
    <form action="/" method="get">
        <label htmlFor="header-search">
            <span className="visually-hidden"></span>
        </label>
        <input
            className="input is-primary"
            type="text"
            id="header-search"
            placeholder=""
            name="s" 
        />
        <button type="submit">Search</button>
    </form>
);

export default SearchBar;