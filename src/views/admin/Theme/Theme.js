import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BASE_API_URL, DEFAULT_AXIOS_OPTIONS } from '../../../AppConstants';
import { useAdminLoggedIn } from '../../../hooks';
import { AddTheme } from './AddTheme';
import { ListThemes } from './ListThemes';
import { UpdateTheme } from './UpdateTheme';

export const Theme = () => {
  useAdminLoggedIn();

  const [lastChangeOccured, setLastChangeOccured] = useState(new Date());
  const [themes, setThemes] = useState([]);

  useEffect(() => {
    axios.get(
      `${BASE_API_URL}/theme`,
      DEFAULT_AXIOS_OPTIONS
    )
      .then((res) => {
        setThemes(res.data);
      })
      .catch((error) => {
        console.error("error", error)
      });
  }, [lastChangeOccured]);

  return (
    <div>
      <h1>Themes (Admin)</h1>
      <div className="contents">
        <div className="content_element">
          <a href='/admin'>Back</a>
        </div>
        <div className="content_element">
          <ListThemes
            themes={themes}
            setLastChangeOccured={setLastChangeOccured}
          />
        </div>
        <div className="content_element">
          <AddTheme
            setLastChangeOccured={setLastChangeOccured}
          />
        </div>
        <div className="content_element">
          <UpdateTheme
            themes={themes}
            setLastChangeOccured={setLastChangeOccured}
          />
        </div>
      </div>
    </div >
  )
}