import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Select from 'react-select';
import { BASE_API_URL, DEFAULT_AXIOS_OPTIONS } from '../../../AppConstants';

export const UpdateTheme = ({ themes, setLastChangeOccured }) => {

  const [themeId, setThemeId] = useState(null);
  const [name, setName] = useState('');
  const [responseMessage, setResponseMessage] = useState(null);

  const onUpdateClick = () => {
    if (window.confirm(`Are you sure that you want to update?`)) {
      setResponseMessage('...Processing');

      axios.put(
        `${BASE_API_URL}/theme/${themeId}`,
        {
          name,
        },
        DEFAULT_AXIOS_OPTIONS
      )
        .then(() => {
          setResponseMessage('Success');
          setLastChangeOccured(new Date());
          setThemeId(null);
          setName('');
        })
        .catch((error) => {
          setResponseMessage('Error');
          console.error("error", error)
        });
    }
  }

  useEffect(() => {
    if (themeId) {
      axios.get(
        `${BASE_API_URL}/theme/${themeId}`,
        DEFAULT_AXIOS_OPTIONS
      )
        .then((res) => {
          const { name } = res.data;
          setName(name);
        })
        .catch((error) => {
          console.error("error", error)
        });
    } else {
      setName('');
    }
  }, [themeId]);

  const selectOptions = themes.map(theme => ({
    value: theme.id,
    label: `${theme.name} (id: ${theme.id})`
  }));

  const selectValue = selectOptions.find(option => option.value === themeId);

  return (
    <>
      <h3 className='has-text-left is-size-4'>Edit Theme</h3>
      <div className="column is-one-third">
        <Select
          value={selectValue || null}
          onChange={selectedOption => setThemeId(selectedOption?.value)}
          options={selectOptions}
          isClearable={true}
          isSearchable={true}
        />
      </div >
      <div className="column is-one-third">
        <input
          className="input"
          type='text'
          placeholder='Theme Name'
          value={name}
          onChange={event => setName(event.target.value)}
        />
      </div>
      <div className="column is-one-third">
        <button
          className="button is-primary"
          disabled={themeId === null || name === ''}
          onClick={onUpdateClick}
        >
          Update
        </button>
      </div>
      <p>{responseMessage ?? ''}</p>
    </>
  )
}