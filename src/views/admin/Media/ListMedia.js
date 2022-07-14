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

  const allColumns = new Set();
  for (const media of medias) {
    for (const key of Object.keys(media)) {
      allColumns.add(key);
    }
  }
  const allColumnsArray = Array.from(allColumns);

  return (
    <>
      <h3 className='has-text-left is-size-4 mb-2'>Existing Medias</h3>
      {medias.length > 0 && (
        <table className="table is-bordered is-striped">
          <thead>
            <tr>
              {allColumnsArray.map(key => <th key={key}>{key}</th>)}
              <th></th>
            </tr>
          </thead>
          <tbody>
            {medias.map(media => (
              <tr key={media.id} >
                {allColumnsArray.map(key => {
                  return key === 'creatorRoles' ? (
                    <td key={key}>
                      <ul>
                        {media[key] ? media[key].map(creatorRole => (
                          <p>
                            &#8226; {`${creatorRole.roleName} - ${creatorRole.firstName} ${creatorRole.lastName}`}
                          </p>
                        ))
                          : null}
                      </ul>
                    </td>
                  ) : (
                    <td key={key}>{media[key]}</td>
                  )
                })}
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