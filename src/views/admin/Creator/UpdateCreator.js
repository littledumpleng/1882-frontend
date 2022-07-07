import React, { useEffect, useState } from 'react';
import { put, get } from 'axios';
import { BASE_API_URL, DEFAULT_AXIOS_OPTIONS } from '../../../AppConstants';

export const UpdateCreator = ({ creators, setChangeOccured }) => {

  const [creatorId, setCreatorId] = useState(null);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [responseMessage, setResponseMessage] = useState(null);

  const onUpdateClick = () => {
    //TODO: make the popup an option
    alert(`Are you sure that you want to update?`);
    setResponseMessage('...Processing');

    //TODO: make `firstName` and `lastName` required
    put(
      `${BASE_API_URL}/creator/${creatorId}`,
      {
        firstName,
        lastName
      },
      DEFAULT_AXIOS_OPTIONS
    )
      .then(() => {
        setResponseMessage('Success');
        setChangeOccured(true);
        setCreatorId('');
        setFirstName('');
        setLastName('');
      })
      .catch((error) => {
        setResponseMessage('Error');
        console.log("error", error)
      });
  }

  useEffect(() => {
    if (creatorId) {
      get(
        `${BASE_API_URL}/creator/${creatorId}`,
        DEFAULT_AXIOS_OPTIONS
      )
        .then((res) => {
          const { firstName, lastName } = res.data;
          setFirstName(firstName);
          setLastName(lastName);
        })
        .catch((error) => {
          console.log("error", error)
        });
    }
  }, [creatorId]);

  //TODO: Fix the update on click
  return (
    <>
      <h3>Edit Creator</h3>
      <select
        options={creators}
      />
      <br />
      <input
        type='text'
        placeholder='First Name'
        value={firstName}
        onChange={event => setFirstName(event.target.value)}
      />
      <br />
      <input
        type='text'
        placeholder='Last Name'
        value={lastName}
        onChange={event => setLastName(event.target.value)}
      />
      <br />
      <button
        disabled={creatorId === null}
        onClick={onUpdateClick}
      >
        Update
      </button>
      <p>{responseMessage ?? ''}</p>
    </>
  )
}