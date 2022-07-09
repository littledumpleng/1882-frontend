import React from 'react';
import axios from 'axios';
import { BASE_API_URL, DEFAULT_AXIOS_OPTIONS } from '../../../AppConstants';

export const ListMedias = ({ medias, setLastChangeOccured }) => {

  const onDeleteClick = (media) => () => {
    if (window.confirm(`Are you sure that you want to delete?`)) {

      axios.delete(
        `${BASE_API_URL}/media/${media.id}`,
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
      <h3 className='has-text-left is-size-4 mb-2'>Existing Medias</h3>
      {medias.length > 0 && (
        <table className="table is-bordered is-striped">
          <thead>
            <tr>
              {Object.keys(medias[0]).map(key => <th key={key}>{key}</th>)}
              <th></th>
            </tr>
          </thead>
          <tbody>
            {medias.map(media => (
              <tr key={media.id} >
                {Object.values(media).map((value, index) => <td key={index}>{value}</td>)}
                <td>
                  <button
                    className="button is-small is-danger ml-2"
                    onClick={onDeleteClick(media)}
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