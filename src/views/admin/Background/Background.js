import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BASE_API_URL, DEFAULT_AXIOS_OPTIONS } from '../../../AppConstants';
import { useAdminLoggedIn } from '../../../hooks';
import { AddBackground } from './AddBackground';
import { ListBackgrounds } from './ListBackgrounds';
import { UpdateBackground } from './UpdateBackground';

export const Background = () => {
  useAdminLoggedIn();

  const [lastChangeOccured, setLastChangeOccured] = useState(new Date());
  const [backgrounds, setBackgrounds] = useState([]);

  useEffect(() => {
    axios.get(
      `${BASE_API_URL}/background`,
      DEFAULT_AXIOS_OPTIONS
    )
      .then((res) => {
        setBackgrounds(res.data);
      })
      .catch((error) => {
        console.error("error", error)
      });
  }, [lastChangeOccured]);

  return (
    <div>
      <h1>Backgrounds (Admin)</h1>
      <div className="contents">
        <div className="content_element">
          <a href='/admin'>Back</a>
        </div>
        <div className="content_element">
          <ListBackgrounds
            backgrounds={backgrounds}
            setLastChangeOccured={setLastChangeOccured}
          />
        </div>
        <div className="content_element">
          <AddBackground
            setLastChangeOccured={setLastChangeOccured}
          />
        </div>
        <div className="content_element">
          <UpdateBackground
            backgrounds={backgrounds}
            setLastChangeOccured={setLastChangeOccured}
          />
        </div>
      </div>
    </div >
  )
}