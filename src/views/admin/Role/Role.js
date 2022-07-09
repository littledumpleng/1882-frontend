import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BASE_API_URL, DEFAULT_AXIOS_OPTIONS } from '../../../AppConstants';
import { useAdminLoggedIn } from '../../../hooks';
import { AddRole } from './AddRole';
import { ListRoles } from './ListRoles';
import { UpdateRole } from './UpdateRole';

export const Role = () => {
  useAdminLoggedIn();

  const [lastChangeOccured, setLastChangeOccured] = useState(new Date());
  const [roles, setRoles] = useState([]);

  useEffect(() => {
    axios.get(
      `${BASE_API_URL}/role`,
      DEFAULT_AXIOS_OPTIONS
    )
      .then((res) => {
        setRoles(res.data);
      })
      .catch((error) => {
        console.error("error", error)
      });
  }, [lastChangeOccured]);

  return (
    <div>
      <h1>Roles (Admin)</h1>
      <div className="contents">
        <div className="content_element">
          <a href='/admin'>Back</a>
        </div>
        <div className="content_element">
          <ListRoles
            roles={roles}
            setLastChangeOccured={setLastChangeOccured}
          />
        </div>
        <div className="content_element">
          <AddRole
            setLastChangeOccured={setLastChangeOccured}
          />
        </div>
        <div className="content_element">
          <UpdateRole
            roles={roles}
            setLastChangeOccured={setLastChangeOccured}
          />
        </div>
      </div>
    </div >
  )
}