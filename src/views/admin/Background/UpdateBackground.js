import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Select from 'react-select';
import { BASE_API_URL, DEFAULT_AXIOS_OPTIONS } from '../../../AppConstants';

export const UpdateBackground = ({ backgrounds, setLastChangeOccured }) => {

  const [backgroundId, setBackgroundId] = useState(null);
  const [name, setName] = useState('');
  const [responseMessage, setResponseMessage] = useState(null);

  const onUpdateClick = () => {
    if (window.confirm(`Are you sure that you want to update?`)) {
      setResponseMessage('...Processing');

      axios.put(
        `${BASE_API_URL}/background/${backgroundId}`,
        {
          name,
        },
        DEFAULT_AXIOS_OPTIONS
      )
        .then(() => {
          setResponseMessage('Success');
          setLastChangeOccured(new Date());
          setBackgroundId(null);
          setName('');
        })
        .catch((error) => {
          setResponseMessage('Error');
          console.error("error", error)
        });
    }
  }

  useEffect(() => {
    if (backgroundId) {
      axios.get(
        `${BASE_API_URL}/background/${backgroundId}`,
        DEFAULT_AXIOS_OPTIONS
      )
        .then((res) => {
          const { name } = res.data;
          setName(name);
        })
        .catch((error) => {
          console.error("error", error)
        });
    }
  }, [backgroundId]);

  const selectOptions = backgrounds.map(background => ({
    value: background.id,
    label: `${background.name} (id: ${background.id})`
  }));

  const selectValue = selectOptions.find(option => option.value === backgroundId);

  return (
    <>
      <h3 className='has-text-left is-size-4'>Edit Background</h3>
      <div className="column is-one-third">
        <Select
          value={selectValue || null}
          onChange={selectedOption => setBackgroundId(selectedOption.value)}
          options={selectOptions}
          isClearable={true}
          isSearchable={true}
        />
      </div >
      <div className="column is-one-third">
        <input
          className="input"
          type='text'
          placeholder='Background Name'
          value={name}
          onChange={event => setName(event.target.value)}
        />
      </div>
      <div className="column is-one-third">
        <button
          className="button is-primary"
          disabled={backgroundId === null || name === ''}
          onClick={onUpdateClick}
        >
          Update
        </button>
      </div>
      <p>{responseMessage ?? ''}</p>
    </>
  )
}