import React from 'react';
import axios from 'axios';
import { BASE_API_URL, DEFAULT_AXIOS_OPTIONS } from '../../../AppConstants';

export const ListBackgrounds = ({ backgrounds, setLastChangeOccured }) => {

  const onDeleteClick = (background) => () => {
    if (window.confirm(`Are you sure that you want to delete?`)) {

      axios.delete(
        `${BASE_API_URL}/background/${background.id}`,
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
      <h3 className='has-text-left is-size-4 mb-2'>Existing Backgrounds</h3>
      {backgrounds.length > 0 && (
        <table className="table is-bordered is-striped">
          <thead>
            <tr>
              {Object.keys(backgrounds[0]).map(key => <th key={key}>{key}</th>)}
              <th></th>
            </tr>
          </thead>
          <tbody>
            {backgrounds.map(background => (
              <tr key={background.id} >
                {Object.values(background).map((value, index) => <td key={index}>{value}</td>)}
                <td>
                  <button
                    className="button is-small is-danger ml-2"
                    onClick={onDeleteClick(background)}
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