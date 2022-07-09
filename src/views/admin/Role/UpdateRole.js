import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Select from 'react-select';
import { BASE_API_URL, DEFAULT_AXIOS_OPTIONS } from '../../../AppConstants';

export const UpdateRole = ({ roles, setLastChangeOccured }) => {

  const [roleId, setRoleId] = useState(null);
  const [name, setName] = useState('');
  const [responseMessage, setResponseMessage] = useState(null);

  const onUpdateClick = () => {
    if (window.confirm(`Are you sure that you want to update?`)) {
      setResponseMessage('...Processing');

      axios.put(
        `${BASE_API_URL}/role/${roleId}`,
        {
          name,
        },
        DEFAULT_AXIOS_OPTIONS
      )
        .then(() => {
          setResponseMessage('Success');
          setLastChangeOccured(new Date());
          setRoleId(null);
          setName('');
        })
        .catch((error) => {
          setResponseMessage('Error');
          console.error("error", error)
        });
    }
  }

  useEffect(() => {
    if (roleId) {
      axios.get(
        `${BASE_API_URL}/role/${roleId}`,
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
  }, [roleId]);

  const selectOptions = roles.map(role => ({
    value: role.id,
    label: `${role.name} (id: ${role.id})`
  }));

  const selectValue = selectOptions.find(option => option.value === roleId);

  return (
    <>
      <h3 className='has-text-left is-size-4'>Edit Role</h3>
      <div className="column is-one-third">
        <Select
          value={selectValue || null}
          onChange={selectedOption => setRoleId(selectedOption?.value)}
          options={selectOptions}
          isClearable={true}
          isSearchable={true}
        />
      </div >
      <div className="column is-one-third">
        <input
          className="input"
          type='text'
          placeholder='Role Name'
          value={name}
          onChange={event => setName(event.target.value)}
        />
      </div>
      <div className="column is-one-third">
        <button
          className="button is-primary"
          disabled={roleId === null || name === ''}
          onClick={onUpdateClick}
        >
          Update
        </button>
      </div>
      <p>{responseMessage ?? ''}</p>
    </>
  )
}