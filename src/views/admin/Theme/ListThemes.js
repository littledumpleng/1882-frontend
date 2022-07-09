import React from 'react';
import axios from 'axios';
import { BASE_API_URL, DEFAULT_AXIOS_OPTIONS } from '../../../AppConstants';

export const ListThemes = ({ themes, setLastChangeOccured }) => {

  const onDeleteClick = (theme) => () => {
    if (window.confirm(`Are you sure that you want to delete?`)) {

      axios.delete(
        `${BASE_API_URL}/theme/${theme.id}`,
        DEFAULT_AXIOS_OPTIONS
      )
        .then(() => {
          setLastChangeOccured(new Date());
        })
        .catch((error) => {
          console.error("error", error)
        });
    }
  }

  return (
    <>
      <h3 className='has-text-left is-size-4 mb-2'>Existing Themes</h3>
      {themes.length > 0 && (
        <table className="table is-bordered is-striped">
          <thead>
            <tr>
              {Object.keys(themes[0]).map(key => <th key={key}>{key}</th>)}
              <th></th>
            </tr>
          </thead>
          <tbody>
            {themes.map(theme => (
              <tr key={theme.id} >
                {Object.values(theme).map((value, index) => <td key={index}>{value}</td>)}
                <td>
                  <button
                    className="button is-small is-danger ml-2"
                    onClick={onDeleteClick(theme)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  )
}