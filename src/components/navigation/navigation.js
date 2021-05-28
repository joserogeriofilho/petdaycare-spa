import React from 'react';
import { Link } from "react-router-dom";
import { logout } from '../../utils/auth'


export default function Navigation(props) {
  return (
    <div>
      <p><Link to="/">Home</Link> | <Link to="/clients">Clients</Link> | <a href='#' onClick={logout}>Logout</a></p>
    </div>
  );
}