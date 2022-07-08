import React, { useState } from 'react';
import { post } from 'axios';
import { BASE_API_URL, DEFAULT_AXIOS_OPTIONS } from '../../../AppConstants';

export const AddCreator = ({ setLastChangeOccured }) => {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [responseMessage, setResponseMessage] = useState(null);

  const onCreateClick = () => {
    if (window.confirm(`Are you sure that you want to create?`)) {
      setResponseMessage('...Processing');

      //TODO: make `firstName` and `lastName` required and if they are not set, then disable the create button
      post(
        `${BASE_API_URL}/creator`,
        {
          firstName,
          lastName
        },
        DEFAULT_AXIOS_OPTIONS
      )
        .then(() => {
          setResponseMessage('Success');
          setLastChangeOccured(new Date());
          setFirstName('');
          setLastName('');
        })
        .catch((error) => {
          setResponseMessage('Error');
          console.log("error", error)
        });
    }
  }
  return (
    <>
      <h3 className='has-text-left is-size-4'>Add Creator</h3>
      <div className="column is-one-third">
        <input
          className="input"
          type='text'
          placeholder='First Name'
          value={firstName}
          onChange={event => setFirstName(event.target.value)}
        />
      </div>
      <div className="column is-one-third">
        <input
          className="input"
          type='text'
          placeholder='Last Name'
          value={lastName}
          onChange={event => setLastName(event.target.value)}
        />
      </div>
      <div className="column">
        <button
          className="button is-info"
          disabled={firstName === '' || lastName === ''}
          onClick={onCreateClick}
        >
          Create
        </button>
      </div>
      <p>{responseMessage ?? ''}</p>
    </>
  )
}