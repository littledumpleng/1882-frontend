import React from 'react';

export const Backgrounds = (props) => {
    const BACKGROUNDS = ['American', 'Chinese', 'Indian', 'Filipino', 'Vietnamese', 'Korean', 'Japanese', 'Pakistani', 'Cambodian', 'Hmong', 'Thai', 'Laotian', 'Bangladeshi', 'Burmese', 'Nepalese', 'Indonesian', 'Sri Lankan', 'Malaysian', 'Bhutanese', 'Mongolian', 'Taiwanese', 'Asian (Unspecified)'];
    return (
        <div className="box">
                <div className="dropdown is-hoverable">
                  <div className="dropdown-trigger">
                    <button
                      className="button"
                      aria-haspopup="true"
                      aria-controls="background-dropdown"
                    >
                      <span>Select a Background</span>
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
                      {BACKGROUNDS.map(type => (<a href="#" className="dropdown-item">{type}</a>))}
                    </div>
                  </div>
                </div>
              </div>
    )
}