import React, { useEffect, useState } from 'react';
import { put, get } from 'axios';
import Select from 'react-select';
import { BASE_API_URL, DEFAULT_AXIOS_OPTIONS } from '../../../AppConstants';
import { getCreatorText } from './utils';

export const UpdateCreator = ({ creators = [], setLastChangeOccured }) => {

  const [creatorId, setCreatorId] = useState(null);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [responseMessage, setResponseMessage] = useState(null);

  const onUpdateClick = () => {
    if (window.confirm(`Are you sure that you want to update?`)) {
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
          setLastChangeOccured(new Date());
          setCreatorId(null);
          setFirstName('');
          setLastName('');
        })
        .catch((error) => {
          setResponseMessage('Error');
          console.log("error", error)
        });
    }
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

  const selectOptions = creators.map(creator => ({
    value: creator.id,
    label: getCreatorText(creator)
  }));

  console.log("creators", creators);

  const selectValue = selectOptions.find(option => option.value === creatorId);
  console.log("selectValue", selectValue);

  //TODO: Fix the update on click
  return (
    <>
      <h3 className='has-text-left is-size-4'>Edit Creator</h3>
      <div className="column is-one-third">
        <Select
          value={selectValue || null}
          onChange={selectedOption => setCreatorId(selectedOption.value)}
          options={selectOptions}
          isClearable={true}
          isSearchable={true}
        />
      </div >
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
      <div className="column is-one-third">
        <button
          className="button is-primary"
          disabled={creatorId === null}
          onClick={onUpdateClick}
        >
          Update
        </button>
      </div>
      <p>{responseMessage ?? ''}</p>
    </>
  )
}