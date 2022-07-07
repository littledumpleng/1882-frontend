import React from 'react';
import { useState } from 'react';

export const Backgrounds = (props) => {
  const BACKGROUNDS = ['American', 'Chinese', 'Indian', 'Filipino', 'Vietnamese', 'Korean', 'Japanese', 'Pakistani', 'Cambodian', 'Hmong', 'Thai', 'Laotian', 'Bangladeshi', 'Burmese', 'Nepalese', 'Indonesian', 'Sri Lankan', 'Malaysian', 'Bhutanese', 'Mongolian', 'Taiwanese', 'Asian (Unspecified)'];
  const [selectedBackground, setSelectedBackground] = useState('Select Background');
  return (
    <div className="box filter-div">
      <div className="dropdown is-hoverable">
        <div className="dropdown-trigger">
          <button
            className="button filter-but"
            aria-haspopup="true"
            aria-controls="background-dropdown"
          >
            <span>{selectedBackground}</span>
            <span className="icon is-small">
              <i className="fas fa-angle-down" aria-hidden="true"></i>
            </span>
          </button>
        </div>
        <div
          className="dropdown-menu"
          id="background-dropdown"
          role="menu"
        >
          <div className="dropdown-content">
            {BACKGROUNDS.map(background => (<p key={background} href="#" className="dropdown-item" onClick={(e) => setSelectedBackground(e.target.innerText)}>{background}</p>))}
          </div>
        </div>
      </div>
    </div>
  )
}