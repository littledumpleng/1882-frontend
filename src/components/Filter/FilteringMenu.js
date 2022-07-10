import React from 'react';
import { FilterDropdown } from './FilterDropdown';

export const FilteringMenu = ({
  backgroundOptions,
  mediaTypeOptions,
  genreOptions,
  themeOptions,
  backgroundsSelected,
  setBackgroundsSelected,
  mediasTypesSelected,
  setMediaTypesSelected,
  genresSelected,
  setGenresSelected,
  themesSelected,
  setThemesSelected,
}) => {
  return (
    <div className="filter-menu, has-ratio">
      <h2 className="m-4">Filtering Menu</h2>
      <FilterDropdown
        label='Select Media Types'
        options={mediaTypeOptions}
        values={mediasTypesSelected}
        setValue={setMediaTypesSelected}
      />
      <FilterDropdown
        label='Select Backgrounds'
        options={backgroundOptions}
        values={backgroundsSelected}
        setValue={setBackgroundsSelected}
      />
      <FilterDropdown
        label='Select Genres'
        options={genreOptions}
        values={genresSelected}
        setValue={setGenresSelected}
      />
      <FilterDropdown
        label='Select Themes'
        options={themeOptions}
        values={themesSelected}
        setValue={setThemesSelected}
      />
    </div>
  )
}