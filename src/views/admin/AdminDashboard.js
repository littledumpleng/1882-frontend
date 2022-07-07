import React from 'react';

export const AdminDashboard = () => {

  // check sessionStorage

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
        <a href='/allMedia'>Manage All Media</a>
        <br />
      </div >
    </div>
  )
}