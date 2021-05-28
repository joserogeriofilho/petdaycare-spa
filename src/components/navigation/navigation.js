import React from 'react';
import { Link } from "react-router-dom";
import { logout } from '../../utils/auth'
import styles from './navigation.module.css';


export default function Navigation(props) {
  return (
    <div>
      <p><Link to="/">Home</Link> | <Link to="/clients">Clients</Link> | <a className={styles.logout} onClick={logout}>Logout</a></p>
    </div>
  );
}