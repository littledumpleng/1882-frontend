import React from 'react';

const getCreatorText = ({ id, firstName, lastName }) => `${firstName} ${lastName} (id: ${id})`;

export const ListCreators = ({ creators, setChangeOccured }) => {

  const onDeleteClick = (creator) => () => {
    //TODO: make this an option pop-up
    alert(`Are you sure that you want to delete ${getCreatorText(creator)}`);
    setChangeOccured(true);
  }

  return (
    <>
      <h3>Existing Creators</h3>
      <div>
        {creators.map(creator => <p key={creator.id}>{getCreatorText(creator)} <button onClick={onDeleteClick(creator)}>Delete</button></p>)}
      </div>
    </>
  )
}