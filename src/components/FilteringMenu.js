import React from 'react';
import { Backgrounds } from './Backgrounds';
import { MediaTypes } from './MediaTypes';
import { Genres } from './Genres';
import { Themes } from './Themes';

export const FilteringMenu = (props) => {
  return (
    <div className="filter-menu, has-ratio">
      <h2>Filtering Menu</h2>
      <MediaTypes />
      <Backgrounds />
      <Genres />
      <Themes />
    </div>
  )
}