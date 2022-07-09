import React, { useState } from 'react';
import axios from 'axios';
import { BASE_API_URL, DEFAULT_AXIOS_OPTIONS } from '../../../AppConstants';

export const AddReview = ({ setLastChangeOccured }) => {

  const [name, setName] = useState('');
  const [responseMessage, setResponseMessage] = useState(null);

  const onCreateClick = () => {
    if (window.confirm(`Are you sure that you want to create?`)) {
      setResponseMessage('...Processing');

      axios.post(
        `${BASE_API_URL}/review`,
        {
          name
        },
        DEFAULT_AXIOS_OPTIONS
      )
        .then(() => {
          setResponseMessage('Success');
          setLastChangeOccured(new Date());
          setName('');
        })
        .catch((error) => {
          setResponseMessage('Error');
          console.error("error", error)
        });
    }
  }

  return (
    <>
      <h3 className='has-text-left is-size-4'>Add Review</h3>
      <div className="column is-one-third">
        <input
          className="input"
          type='text'
          placeholder='Review name'
          value={name}
          onChange={event => setName(event.target.value)}
        />
      </div>
      <div className="column">
        <button
          className="button is-info"
          disabled={name === ''}
          onClick={onCreateClick}
        >
          Create
        </button>
      </div>
      <p>{responseMessage ?? ''}</p>
    </>
  )
}