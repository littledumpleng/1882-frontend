import React from 'react';

export const Genres = (props) => {
    const GENRES = ['Action and Adventure', 'Autobiography', 'Biography', 'Children\'s', 'Coming-of-age', 'Diary', 'Drama', 'History', 'Fiction', 'Comedy', 'Journal', 'Memoir', 'Philosophy', 'Romance', 'Young Adult', 'Alternative', 'Blues', 'Dance', 'Electronic', 'Hip-hop/Rap', 'Indie Pop', 'Inspirational', 'J-pop', 'Jazz', 'K-pop', 'Pop', 'R&B/Soul', 'Rock', 'Indie Film', 'Short Story', 'Nonfiction', 'Op-Ed'];
    return (
        <div className="box">
        <div className="dropdown is-hoverable">
          <div className="dropdown-trigger">
            <button
              className="button"
              aria-haspopup="true"
              aria-controls="genre-dropdown"
            >
              <span>Select a Genre</span>
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
              {GENRES.map(type => (<a href="#" className="dropdown-item">{type}</a>))}
            </div>
          </div>
        </div>
      </div>
    )
}