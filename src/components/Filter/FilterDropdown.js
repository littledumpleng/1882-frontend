import React from 'react';

export const FilterDropdown = ({ options, setVariable }) => {
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
            {options.map(option => (<p key={options.value} className="dropdown-item" style={{ cursor: 'pointer' }} onClick={() => setVariable(options.value)}>{option.label}</p>))}
          </div>
        </div>
      </div>
    </div>
  )
}