import React from 'react';
import { NavLink } from 'react-router-dom';
import { MdArrowBackIosNew } from 'react-icons/md';

import styles from '../styles/Navbar.module.css';

function Navbar() {
  return (
    <div>
      <nav className={styles.navLinks}>
        <NavLink
          className={styles.navLink}
          to="/"
        >
          <MdArrowBackIosNew />
          <span>Back</span>
        </NavLink>

        <NavLink
          className={styles.navLink}
          to="/missions"
          style={({ isActive }) => ({
            textDecoration: isActive ? 'underline' : 'none',
          })}
        >
          Home
        </NavLink>

        <NavLink
          className={styles.navLink}
          to="/rockets"
          style={({ isActive }) => ({
            textDecoration: isActive ? 'underline' : 'none',
          })}
        >
          Details
        </NavLink>
      </nav>
    </div>
  );
}

export default Navbar;
