import React from 'react';
import { useState } from 'react';
export const MediaTypes = (props) => {
    const MEDIA_TYPES = ['Album', 'Article', 'Book', 'Documentary', 'Film', 'Poetry', 'Television Series'];
    const [selectedMediaType, setSelectedMediaType] = useState('Select Media Type');
    return (
      <div className="box filter-div">
        <div className="dropdown is-hoverable">
          <div className="dropdown-trigger">
            <button
              className="button filter-but"
              aria-haspopup="true"
              aria-controls="media-type-dropdown"
            >
              <span>{selectedMediaType}</span>
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
                {MEDIA_TYPES.map(type => (<a href="#" className="dropdown-item" onClick={(e) => setSelectedMediaType(e.target.innerText)}>{type}</a>))}
            </div>
          </div>
        </div>
      </div>
    )
}