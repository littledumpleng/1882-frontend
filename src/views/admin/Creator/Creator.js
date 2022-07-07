import React, { useEffect, useState } from 'react';
import { get } from 'axios';
import { BASE_API_URL, DEFAULT_AXIOS_OPTIONS } from '../../../AppConstants';
import { AddCreator } from './AddCreator';
import { ListCreators } from './ListCreators';
import { UpdateCreator } from './UpdateCreator';

export const Creator = () => {

  // set function where if sessionStorage is not set, then return user to home

  const [changeOccured, setChangeOccured] = useState(false);
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
    <div>
      <h1>Creators (Admin)</h1>
      <div className="contents">
        <div className="content_element">
          <a href='/admin'>Back</a>
        </div>
        <div className="content_element">
          <ListCreators
            creators={creators}
            setChangeOccured={setChangeOccured}
          />
        </div>
        <div className="content_element">
          <AddCreator
            setChangeOccured={setChangeOccured}
          />
        </div>
        <div className="content_element">
          <UpdateCreator
            creators={creators}
            setChangeOccured={setChangeOccured}
          />
        </div>
      </div>
    </div >
  )
}