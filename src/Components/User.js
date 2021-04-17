import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const User = (props) => {
  let location = useLocation();
  console.log(props);

  return (
    <div>
      <span>{location.state.username}</span>
      <br />
      <span>{location.state.name}</span>
      <br />
      <span>{location.state.email}</span>
      <br />
      <span>{location.state.website}</span>
      <br />
      <span>{location.state.address.street} </span>
      <br />
    </div>
  );
};

export default User;
