import React from 'react';

export const Themes = (props) => {
    const THEMES = ['Good vs. Evil', 'Love', 'Redemption', 'Courage and Perserverance', 'Revenge', 'Culture', 'Identity', 'Gender', 'Femininity', 'Masculinity', 'Sexuality', 'Age', 'Traditions', 'Immigration', 'Family', 'LGBTQ', 'Career', 'Alienation', 'Friendship', 'Violence', 'Activism'];
    return (
        <div className="box">
        <div className="dropdown is-hoverable">
          <div className="dropdown-trigger">
            <button
              className="button"
              aria-haspopup="true"
              aria-controls="theme-dropdown"
            >
              <span>Select a Theme</span>
              <span className="icon is-small">
                <i className="fas fa-angle-down" aria-hidden="true"></i>
              </span>
            </button>
          </div>
          <div className="dropdown-menu" id="theme-dropdown" role="menu">
            <div className="dropdown-content">
              {THEMES.map(type => (<a href="#" className="dropdown-item">{type}</a>))}
            </div>
          </div>
        </div>
      </div>
    )
}