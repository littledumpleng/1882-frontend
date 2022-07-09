import React from 'react';
import { useNavigate } from "react-router-dom";
import { ADMIN_LOGIN_SESSION_STORAGE_KEY } from '../../AppConstants';
import { useAdminLoggedIn } from '../../hooks';

export const AdminDashboard = () => {
  const navigate = useNavigate();
  useAdminLoggedIn();

  const onLogoutClick = () => {
    sessionStorage.removeItem(ADMIN_LOGIN_SESSION_STORAGE_KEY);
    navigate('/');
  }

  return (
    <div>
      <h1>Manage data (Admin)</h1>
      <div className="content_element">
        <a href='/creator'>Manage Creators</a>
        <br />
        <a href='/background'>Manage Backgrounds</a>
        <br />
        <a href='/genre'>Manage Genres</a>
        <br />
        <a href='/mediaType'>Manage Media Types</a>
        <br />
        <a href='/role'>Manage Roles</a>
        <br />
        <a href='/theme'>Manage Themes</a>
        <br />
        <a href='/media'>Manage Media</a>
        <br />
        <a href='/review'>Manage Reviews</a>
        <br />
        <div className="column">
          <button
            className="button is-link is-small"
            onClick={onLogoutClick}
          >
            Logout
          </button>
        </div>
      </div >
    </div>
  )
}