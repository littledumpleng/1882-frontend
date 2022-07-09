import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Select from 'react-select';
import { BASE_API_URL, DEFAULT_AXIOS_OPTIONS } from '../../../AppConstants';

export const UpdateReview = ({ reviews, setLastChangeOccured }) => {

  const [reviewId, setReviewId] = useState(null);
  const [name, setName] = useState('');
  const [responseMessage, setResponseMessage] = useState(null);

  const onUpdateClick = () => {
    if (window.confirm(`Are you sure that you want to update?`)) {
      setResponseMessage('...Processing');

      axios.put(
        `${BASE_API_URL}/review/${reviewId}`,
        {
          name,
        },
        DEFAULT_AXIOS_OPTIONS
      )
        .then(() => {
          setResponseMessage('Success');
          setLastChangeOccured(new Date());
          setReviewId(null);
          setName('');
        })
        .catch((error) => {
          setResponseMessage('Error');
          console.error("error", error)
        });
    }
  }

  useEffect(() => {
    if (reviewId) {
      axios.get(
        `${BASE_API_URL}/review/${reviewId}`,
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
  }, [reviewId]);

  const selectOptions = reviews.map(review => ({
    value: review.id,
    label: `${review.name} (id: ${review.id})`
  }));

  const selectValue = selectOptions.find(option => option.value === reviewId);

  return (
    <>
      <h3 className='has-text-left is-size-4'>Edit Review</h3>
      <div className="column is-one-third">
        <Select
          value={selectValue || null}
          onChange={selectedOption => setReviewId(selectedOption?.value)}
          options={selectOptions}
          isClearable={true}
          isSearchable={true}
        />
      </div >
      <div className="column is-one-third">
        <input
          className="input"
          type='text'
          placeholder='Review Name'
          value={name}
          onChange={event => setName(event.target.value)}
        />
      </div>
      <div className="column is-one-third">
        <button
          className="button is-primary"
          disabled={reviewId === null || name === ''}
          onClick={onUpdateClick}
        >
          Update
        </button>
      </div>
      <p>{responseMessage ?? ''}</p>
    </>
  )
}