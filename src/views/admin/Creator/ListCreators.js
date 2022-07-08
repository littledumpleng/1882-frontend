import React from 'react';
import { getCreatorText } from './utils';

export const ListCreators = ({ creators, setLastChangeOccured }) => {

  const onDeleteClick = (creator) => () => {
    if (window.confirm(`Are you sure that you want to delete ${getCreatorText(creator)}`)) {
      setLastChangeOccured(new Date());
    }
  }

  return (
    <>
      <h3 className='has-text-left is-size-4'>Existing Creators</h3>
      <div>
        {creators.map(creator => (
          <p
            className="is-size-5 m-4"
            key={creator.id}
          >
            - {getCreatorText(creator)}
            <button
              className="button is-small is-danger ml-2"
              onClick={onDeleteClick(creator)}
            >
              Delete
            </button>
          </p>
        ))}
      </div>
    </>
  )
}