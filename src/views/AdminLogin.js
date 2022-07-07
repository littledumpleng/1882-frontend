import React, { useState } from 'react';

export const AdminLogin = () => {
  const [password, setPassword] = useState();

  const onSubmitClick = () => {
    // check if the password matches
    // then set sessionStorage
    // redirect to AdminDashboard
  }

  return (
    <div>
      <h1>Login to your admin</h1>
      <div className="content_element">
        <input
          type="password"
          placeholder='password'
          value={password}
          onChange={event => setPassword(event.target.value)}
        />
        <br />
        <button onClick={onSubmitClick}>Submit</button>
      </div >
    </div>
  )
}