import React from 'react';
import Select from 'react-select';

export const FilterDropdown = ({ label, options, values, setValue }) => {
  return (
    <div className="box ml-5">
      <p>{label}</p>
      <Select
        value={values}
        onChange={selectedOptions => setValue(selectedOptions)}
        options={options}
        isMulti
        isClearable={true}
        isSearchable={true}
      />
    </div>
  )
}