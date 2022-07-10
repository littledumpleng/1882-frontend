import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BASE_API_URL, DEFAULT_AXIOS_OPTIONS } from '../../../AppConstants';
import { useAdminLoggedIn } from '../../../hooks';
import { AddMedia } from './AddMedia';
import { ListMedias } from './ListMedia';
import { UpdateMedia } from './UpdateMedia';

export const Media = () => {
  useAdminLoggedIn();

  const [lastChangeOccured, setLastChangeOccured] = useState(new Date());
  const [medias, setMedias] = useState([]);
  const [mediaTypeOptions, setMediaTypeOptions] = useState([]);

  // get media
  useEffect(() => {
    axios.get(
      `${BASE_API_URL}/media`,
      DEFAULT_AXIOS_OPTIONS
    )
      .then((res) => {
        setMedias(res.data);
      })
      .catch((error) => {
        console.error("error", error)
      });
  }, [lastChangeOccured]);

  // get mediaTypes
  useEffect(() => {
    axios.get(
      `${BASE_API_URL}/mediatype`,
      DEFAULT_AXIOS_OPTIONS
    )
      .then((res) => {
        const selectOptions = res.data.map(mediaType => ({
          value: mediaType.id,
          label: `${mediaType.name} (id: ${mediaType.id})`
        }));
        setMediaTypeOptions(selectOptions);
      })
      .catch((error) => {
        console.error("error", error)
      });
  }, []);

  return (
    <div>
      <h1>Medias (Admin)</h1>
      <div className="contents">
        <div className="content_element">
          <a href='/admin'>Back</a>
        </div>
        <div className="content_element">
          <ListMedias
            medias={medias}
            setLastChangeOccured={setLastChangeOccured}
          />
        </div>
        <div className="content_element">
          <AddMedia
            setLastChangeOccured={setLastChangeOccured}
            mediaTypeOptions={mediaTypeOptions}
          />
        </div>
        <div className="content_element">
          <UpdateMedia
            medias={medias}
            setLastChangeOccured={setLastChangeOccured}
            mediaTypeOptions={mediaTypeOptions}
          />
        </div>
      </div>
    </div >
  )
}