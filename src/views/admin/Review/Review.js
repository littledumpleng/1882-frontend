import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BASE_API_URL, DEFAULT_AXIOS_OPTIONS } from '../../../AppConstants';
import { useAdminLoggedIn } from '../../../hooks';
import { AddReview } from './AddReview';
import { ListReviews } from './ListReviews';
import { UpdateReview } from './UpdateReview';

export const Review = () => {
  useAdminLoggedIn();

  const [lastChangeOccured, setLastChangeOccured] = useState(new Date());
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    axios.get(
      `${BASE_API_URL}/review`,
      DEFAULT_AXIOS_OPTIONS
    )
      .then((res) => {
        setReviews(res.data);
      })
      .catch((error) => {
        console.error("error", error)
      });
  }, [lastChangeOccured]);

  return (
    <div>
      <h1>Reviews (Admin)</h1>
      <div className="contents">
        <div className="content_element">
          <a href='/admin'>Back</a>
        </div>
        <div className="content_element">
          <ListReviews
            reviews={reviews}
            setLastChangeOccured={setLastChangeOccured}
          />
        </div>
        <div className="content_element">
          <AddReview
            setLastChangeOccured={setLastChangeOccured}
          />
        </div>
        <div className="content_element">
          <UpdateReview
            reviews={reviews}
            setLastChangeOccured={setLastChangeOccured}
          />
        </div>
      </div>
    </div >
  )
}