import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const User = (props) => {
  let location = useLocation();

  return (
    <>
      <div className='container mt-5'>
        <div className='float-right'>
          <Link to='/'>Home</Link>
        </div>
        <span>Username : {location.state.username}</span>
        <br />
        <span>Full Name : {location.state.name}</span>
        <br />
        <span>Email : {location.state.email}</span>
        <br />
        <span>Website : {location.state.website}</span>
        <br />
        <span>
          Company Details :
          {Object.keys(location.state.company).map((key, i) => (
            <p key={i}>
              <span>
                {key}: {location.state.company[key]}
              </span>
            </p>
          ))}
        </span>
        <br />
      </div>
    </>
  );
};

export default User;
