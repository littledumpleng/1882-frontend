import React, { useState } from 'react';
import Select from 'react-select';

export const CreatorRolesForMedia = ({ creatorRoles = [], setCreatorRoles, creatorOptions, roleOptions }) => {

  const [creator, setCreator] = useState(null);
  const [role, setRole] = useState(null);

  const onAddClick = () => {
    setCreatorRoles([
      ...creatorRoles,
      {
        creator,
        role,
      }
    ]);
    setCreator(null);
    setRole(null);
  }

  const onDeleteClick = (index) => () => {
    const newValues = [...creatorRoles];
    newValues.splice(index, 1);
    setCreatorRoles(newValues);
  }

  console.log("creatorRoles", creatorRoles);

  return (
    <div className="column is-one-third">
      <p>Creators</p>
      {creatorRoles.length > 0 ? (
        <table className="table is-bordered is-striped">
          <thead>
            <tr>
              <th>Creator</th>
              <th>Role</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {creatorRoles.map((creatorRole, index) => (
              <tr key={index}>
                <td>{creatorRole.creator.label}</td>
                <td>{creatorRole.role.label}</td>
                <td>
                  <button
                    className="button is-small is-danger ml-2"
                    onClick={onDeleteClick(index)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className='m-2'><i>(None)</i></p>
      )}
      <div className="column">
        <p>Creator</p>
        <Select
          value={creator}
          onChange={selectedOption => setCreator(selectedOption)}
          options={creatorOptions}
          isClearable={true}
          isSearchable={true}
        />
      </div>
      <div className="column">
        <p>Role</p>
        <Select
          value={role}
          onChange={selectedOption => setRole(selectedOption)}
          options={roleOptions}
          isClearable={true}
          isSearchable={true}
        />
      </div>
      <div className="column">
        <button
          className="button"
          disabled={!creator || !role}
          onClick={onAddClick}
        >
          Add Creator
        </button>
      </div>
    </div>
  )
}