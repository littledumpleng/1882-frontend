import React from 'react';

export const MediaTypes = (props) => {
    const MEDIA_TYPES = ['Album', 'Article', 'Book', 'Documentary', 'Film', 'Poetry', 'Television Series'];
    return (
      <div className="box">
        <div className="dropdown is-hoverable">
          <div className="dropdown-trigger">
            <button
              className="button"
              aria-haspopup="true"
              aria-controls="media-type-dropdown"
            >
              <span>Select Media Type</span>
              <span className="icon is-small">
                <i className="fas fa-angle-down" aria-hidden="true"></i>
              </span>
            </button>
          </div>
          <div
            className="dropdown-menu"
            id="media-type-dropdown"
            role="menu"
          >
            <div className="dropdown-content">
                {MEDIA_TYPES.map(type => (<a href="#" className="dropdown-item">{type}</a>))}
            </div>
          </div>
        </div>
      </div>
    )
}