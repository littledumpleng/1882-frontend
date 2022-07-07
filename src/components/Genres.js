import React from 'react';
import { useState } from 'react';

export const Genres = (props) => {
  const GENRES = ['Action and Adventure', 'Autobiography', 'Biography', 'Children\'s', 'Coming-of-age', 'Diary', 'Drama', 'History', 'Fiction', 'Comedy', 'Journal', 'Memoir', 'Philosophy', 'Romance', 'Young Adult', 'Alternative', 'Blues', 'Dance', 'Electronic', 'Hip-hop/Rap', 'Indie Pop', 'Inspirational', 'J-pop', 'Jazz', 'K-pop', 'Pop', 'R&B/Soul', 'Rock', 'Indie Film', 'Short Story', 'Nonfiction', 'Op-Ed'];
  const [selectedGenre, setSelectedGenre] = useState('Select Genre');
  return (
    <div className="box filter-div">
      <div className="dropdown is-hoverable">
        <div className="dropdown-trigger">
          <button
            className="button filter-but"
            aria-haspopup="true"
            aria-controls="genre-dropdown"
          >
            <span>{selectedGenre}</span>
            <span className="icon is-small">
              <i className="fas fa-angle-down" aria-hidden="true"></i>
            </span>
          </button>
        </div>
        <div
          className="dropdown-menu"
          id="genre-dropdown"
          role="menu"
        >
          <div className="dropdown-content">
            {GENRES.map(genre => (<p key={genre} href="#" className="dropdown-item" onClick={(e) => setSelectedGenre(e.target.innerText)}>{genre}</p>))}
          </div>
        </div>
      </div>
    </div>
  )
}