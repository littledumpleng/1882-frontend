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
  const [genreOptions, setGenreOptions] = useState([]);
  const [themeOptions, setThemeOptions] = useState([]);
  const [backgroundOptions, setBackgroundOptions] = useState([]);
  const [creatorOptions, setCreatorOptions] = useState([]);
  const [roleOptions, setRoleOptions] = useState([]);


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
  }, [lastChangeOccured]);

  // get genres
  useEffect(() => {
    axios.get(
      `${BASE_API_URL}/genre`,
      DEFAULT_AXIOS_OPTIONS
    )
      .then((res) => {
        const selectOptions = res.data.map(genre => ({
          value: genre.id,
          label: `${genre.name} (id: ${genre.id})`
        }));
        setGenreOptions(selectOptions);
      })
      .catch((error) => {
        console.error("error", error)
      });
  }, [lastChangeOccured]);

  // get themes
  useEffect(() => {
    axios.get(
      `${BASE_API_URL}/theme`,
      DEFAULT_AXIOS_OPTIONS
    )
      .then((res) => {
        const selectOptions = res.data.map(theme => ({
          value: theme.id,
          label: `${theme.name} (id: ${theme.id})`
        }));
        setThemeOptions(selectOptions);
      })
      .catch((error) => {
        console.error("error", error)
      });
  }, [lastChangeOccured]);

  // get backgrounds
  useEffect(() => {
    axios.get(
      `${BASE_API_URL}/background`,
      DEFAULT_AXIOS_OPTIONS
    )
      .then((res) => {
        const selectOptions = res.data.map(background => ({
          value: background.id,
          label: `${background.name} (id: ${background.id})`
        }));
        setBackgroundOptions(selectOptions);
      })
      .catch((error) => {
        console.error("error", error)
      });
  }, [lastChangeOccured]);

  // get creators
  useEffect(() => {
    axios.get(
      `${BASE_API_URL}/creator`,
      DEFAULT_AXIOS_OPTIONS
    )
      .then((res) => {
        const selectOptions = res.data.map(creator => ({
          value: creator.id,
          label: `${creator.name} (id: ${creator.id})`
        }));
        setCreatorOptions(selectOptions);
      })
      .catch((error) => {
        console.error("error", error)
      });
  }, [lastChangeOccured]);

  // get roles
  useEffect(() => {
    axios.get(
      `${BASE_API_URL}/role`,
      DEFAULT_AXIOS_OPTIONS
    )
      .then((res) => {
        const selectOptions = res.data.map(role => ({
          value: role.id,
          label: `${role.name} (id: ${role.id})`
        }));
        setRoleOptions(selectOptions);
      })
      .catch((error) => {
        console.error("error", error)
      });
  }, [lastChangeOccured]);

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
            genreOptions={genreOptions}
            themeOptions={themeOptions}
            backgroundOptions={backgroundOptions}
            creatorOptions={creatorOptions}
            roleOptions={roleOptions}
          />
        </div>
        <div className="content_element">
          <UpdateMedia
            medias={medias}
            setLastChangeOccured={setLastChangeOccured}
            mediaTypeOptions={mediaTypeOptions}
            genreOptions={genreOptions}
            themeOptions={themeOptions}
            backgroundOptions={backgroundOptions}
            creatorOptions={creatorOptions}
            roleOptions={roleOptions}
          />
        </div>
      </div>
    </div >
  )
}