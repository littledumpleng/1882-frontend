import React, { useState } from 'react';
import { post } from 'axios';
import { BASE_API_URL } from '../../../AppConstants';

export const AddCreator = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [responseMessage, setResponseMessage] = useState(null);
  const onCreateClick = () => {
    setResponseMessage('...Processing');

    //TODO: make `firstName` and `lastName` required
    post(
      `${BASE_API_URL}/creator`,
      {
        firstName,
        lastName
      },
      {
        withCredentials: true,
      }
    )
      .then(() => {
        setResponseMessage('Success');
        setFirstName('');
        setLastName('');
      })
      .catch((error) => {
        setResponseMessage('Error');
        console.log("error", error)
      });
  }
  return (
    <>
      <h3>Add Creator</h3>
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
      <button onClick={onCreateClick}>Create</button>
      <p>{responseMessage ?? ''}</p>
    </>
  )
}