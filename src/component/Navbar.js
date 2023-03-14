import React from 'react';
import { NavLink } from 'react-router-dom';
// import { SlArrowLeft } from 'react-icons/Sl';
import { MdArrowBackIosNew } from 'react-icons/md';

import styles from '../styles/Navbar.module.css';

function Navbar() {
  return (
    <div>
      <nav className={styles.navLinks}>
        <NavLink
          className={styles.navLink}
          to="/"
          // style={({ isActive }) => ({
          //   textDecoration: isActive ? 'underline' : 'none',
          // })}
        >
          <MdArrowBackIosNew />
          <span>Back</span>
          {/* <SlArrowLeft /> */}
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
