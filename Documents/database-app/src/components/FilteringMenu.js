import React from 'react';
import {Backgrounds} from './Backgrounds';
import {MediaTypes} from './MediaTypes';
import {Genres} from './Genres';
import {Themes} from './Themes';

export const FilteringMenu = (props) => {
    return (
        <div className="column is-one-quarter">
        <div className="box">
          <div className="filter-menu, has-ratio">
            <h2>FILTERING MENU</h2>

            <div className="box">
              <MediaTypes />
              <Backgrounds />
              <Genres />
              <Themes />

            </div>
            
          </div>
        </div>
      </div>
    )
}