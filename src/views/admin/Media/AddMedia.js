import React, { useState } from 'react';
import axios from 'axios';
import Select from 'react-select';
import { BASE_API_URL, DEFAULT_AXIOS_OPTIONS } from '../../../AppConstants';

export const AddMedia = ({ setLastChangeOccured, mediaTypeOptions, genreOptions }) => {

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [releaseDate, setReleaseDate] = useState('');
  const [mediaTypeIds, setMediaTypeIds] = useState([]);
  const [genreIds, setGenreIds] = useState([]);
  const [responseMessage, setResponseMessage] = useState(null);

  const onCreateClick = () => {
    if (window.confirm(`Are you sure that you want to create?`)) {
      setResponseMessage('...Processing');

      axios.post(
        `${BASE_API_URL}/media`,
        {
          title,
          description,
          releaseDate,
          mediaTypeIds,
          genreIds,
        },
        DEFAULT_AXIOS_OPTIONS
      )
        .then(() => {
          setResponseMessage('Success');
          setLastChangeOccured(new Date());
          setTitle('');
          setDescription('');
          setReleaseDate('');
          setMediaTypeIds([]);
          setGenreIds([]);
        })
        .catch((error) => {
          setResponseMessage('Error');
          console.error("error", error)
        });
    }
  }

  return (
    <>
      <h3 className='has-text-left is-size-4'>Add Media</h3>
      <div className="column is-one-third">
        <input
          className="input"
          type='text'
          placeholder='Media title'
          value={title}
          onChange={event => setTitle(event.target.value)}
        />
      </div>
      <div className="column is-one-third">
        <textarea
          className="textarea"
          placeholder='Media description'
          value={description}
          onChange={event => setDescription(event.target.value)}
        />
      </div>
      <div className="column is-one-third">
        <p>Release Date</p>
        <input
          className="input"
          type="date"
          value={releaseDate}
          onChange={event => setReleaseDate(event.target.value)}
        />
      </div>
      <div className="column is-one-third">
        <p>Media Types</p>
        <Select
          value={mediaTypeOptions.filter(option => mediaTypeIds.includes(option.value)) || null}
          onChange={selectedOptions => setMediaTypeIds(selectedOptions.map(selectedOption => selectedOption?.value))}
          options={mediaTypeOptions}
          isMulti
          isClearable={true}
          isSearchable={true}
        />
      </div>
      <div className="column is-one-third">
        <p>Genres</p>
        <Select
          value={genreOptions.filter(option => genreIds.includes(option.value)) || null}
          onChange={selectedOptions => setGenreIds(selectedOptions.map(selectedOption => selectedOption?.value))}
          options={genreOptions}
          isMulti
          isClearable={true}
          isSearchable={true}
        />
      </div>
      <div className="column">
        <button
          className="button is-info"
          disabled={title === ''}
          onClick={onCreateClick}
        >
          Create
        </button>
      </div>
      <p>{responseMessage ?? ''}</p>
    </>
  )
}