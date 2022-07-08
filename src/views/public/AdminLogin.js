import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { ADMIN_PASSWORD, ADMIN_LOGIN_SESSION_STORAGE_KEY, ADMIN_LOGIN_SESSION_STORAGE_VALUE } from '../../AppConstants';

export const AdminLogin = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState();
  const [responseMessage, setResponseMessage] = useState(null);

  const onLoginClick = () => {
    if (password === ADMIN_PASSWORD) {
      setResponseMessage('Success');
      sessionStorage.setItem(ADMIN_LOGIN_SESSION_STORAGE_KEY, ADMIN_LOGIN_SESSION_STORAGE_VALUE);
      navigate('/admin');
    }
    else {
      setResponseMessage('Incorrect');
    }
  }

  return (
    <div>
      <h1>Login to your admin</h1>
      <div className="content_element">
        <div className="column is-one-third">
          <input
            className="input"
            type="password"
            placeholder='password'
            value={password}
            onChange={event => setPassword(event.target.value)}
          />
        </div>
        <div className="column">
          <button
            className="button is-info"
            onClick={onLoginClick}
          >
            Login
          </button>
        </div>
        <p>{responseMessage ?? ''}</p>
      </div >
    </div>
  )
}