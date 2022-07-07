import React, { useEffect, useState } from 'react';
import { get } from 'axios';
import { BASE_API_URL, DEFAULT_AXIOS_OPTIONS } from '../../../AppConstants';

export const ListCreators = ({ changeOccured }) => {

  const [creators, setCreators] = useState([]);

  useEffect(() => {
    get(
      `${BASE_API_URL}/creator`,
      DEFAULT_AXIOS_OPTIONS
    )
      .then((res) => {
        setCreators(res.data);
      })
      .catch((error) => {
        console.log("error", error)
      });
  }, [changeOccured]);

  return (
    <>
      <h3>Existing Creators</h3>
      <div>
        {creators.map(creator => <p key={creator.id}>{`${creator.firstName} ${creator.lastName} (id: ${creator.id})`}</p>)}
      </div>
    </>
  )
}