import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BASE_API_URL, DEFAULT_AXIOS_OPTIONS } from '../../../AppConstants';
import { useAdminLoggedIn } from '../../../hooks';
import { AddMediaType } from './AddMediaType';
import { ListMediaTypes } from './ListMediaTypes';
import { UpdateMediaType } from './UpdateMediaType';

export const MediaType = () => {
  useAdminLoggedIn();

  const [lastChangeOccured, setLastChangeOccured] = useState(new Date());
  const [mediaTypes, setMediaTypes] = useState([]);

  useEffect(() => {
    axios.get(
      `${BASE_API_URL}/mediaType`,
      DEFAULT_AXIOS_OPTIONS
    )
      .then((res) => {
        setMediaTypes(res.data);
      })
      .catch((error) => {
        console.error("error", error)
      });
  }, [lastChangeOccured]);

  return (
    <div>
      <h1>Media Types (Admin)</h1>
      <div className="contents">
        <div className="content_element">
          <a href='/admin'>Back</a>
        </div>
        <div className="content_element">
          <ListMediaTypes
            mediaTypes={mediaTypes}
            setLastChangeOccured={setLastChangeOccured}
          />
        </div>
        <div className="content_element">
          <AddMediaType
            setLastChangeOccured={setLastChangeOccured}
          />
        </div>
        <div className="content_element">
          <UpdateMediaType
            mediaTypes={mediaTypes}
            setLastChangeOccured={setLastChangeOccured}
          />
        </div>
      </div>
    </div >
  )
}