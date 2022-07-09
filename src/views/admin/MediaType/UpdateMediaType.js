import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Select from 'react-select';
import { BASE_API_URL, DEFAULT_AXIOS_OPTIONS } from '../../../AppConstants';

export const UpdateMediaType = ({ mediaTypes, setLastChangeOccured }) => {

  const [mediaTypeId, setMediaTypeId] = useState(null);
  const [name, setName] = useState('');
  const [responseMessage, setResponseMessage] = useState(null);

  const onUpdateClick = () => {
    if (window.confirm(`Are you sure that you want to update?`)) {
      setResponseMessage('...Processing');

      axios.put(
        `${BASE_API_URL}/mediaType/${mediaTypeId}`,
        {
          name,
        },
        DEFAULT_AXIOS_OPTIONS
      )
        .then(() => {
          setResponseMessage('Success');
          setLastChangeOccured(new Date());
          setMediaTypeId(null);
          setName('');
        })
        .catch((error) => {
          setResponseMessage('Error');
          console.error("error", error)
        });
    }
  }

  useEffect(() => {
    if (mediaTypeId) {
      axios.get(
        `${BASE_API_URL}/mediaType/${mediaTypeId}`,
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
  }, [mediaTypeId]);

  const selectOptions = mediaTypes.map(mediaType => ({
    value: mediaType.id,
    label: `${mediaType.name} (id: ${mediaType.id})`
  }));

  const selectValue = selectOptions.find(option => option.value === mediaTypeId);

  return (
    <>
      <h3 className='has-text-left is-size-4'>Edit Media Type</h3>
      <div className="column is-one-third">
        <Select
          value={selectValue || null}
          onChange={selectedOption => setMediaTypeId(selectedOption.value)}
          options={selectOptions}
          isClearable={true}
          isSearchable={true}
        />
      </div >
      <div className="column is-one-third">
        <input
          className="input"
          type='text'
          placeholder='MediaType Name'
          value={name}
          onChange={event => setName(event.target.value)}
        />
      </div>
      <div className="column is-one-third">
        <button
          className="button is-primary"
          disabled={mediaTypeId === null || name === ''}
          onClick={onUpdateClick}
        >
          Update
        </button>
      </div>
      <p>{responseMessage ?? ''}</p>
    </>
  )
}