import React from 'react';
import { useState } from 'react';

export const Themes = (props) => {
    const THEMES = ['Good vs. Evil', 'Love', 'Redemption', 'Courage and Perserverance', 'Revenge', 'Culture', 'Identity', 'Gender', 'Femininity', 'Masculinity', 'Sexuality', 'Age', 'Traditions', 'Immigration', 'Family', 'LGBTQ', 'Career', 'Alienation', 'Friendship', 'Violence', 'Activism'];
    const [selectedTheme, setSelectedTheme] = useState('Select Theme');
    return (
        <div className="box filter-div">
        <div className="dropdown is-hoverable">
          <div className="dropdown-trigger">
            <button
              className="button filter-but"
              aria-haspopup="true"
              aria-controls="theme-dropdown"
            >
              <span>{selectedTheme}</span>
              <span className="icon is-small">
                <i className="fas fa-angle-down" aria-hidden="true"></i>
              </span>
            </button>
          </div>
          <div className="dropdown-menu" id="theme-dropdown" role="menu">
            <div className="dropdown-content">
              {THEMES.map(type => (<a href="#" className="dropdown-item" onClick={(e) => setSelectedTheme(e.target.innerText)}>{type}</a>))}
            </div>
          </div>
        </div>
      </div>
    )
}