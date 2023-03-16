import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { BiMicrophone } from 'react-icons/bi';
import { IoIosArrowBack } from 'react-icons/io';
import { AiOutlineSetting } from 'react-icons/ai';
import styles from '../styles/DetailsNav.module.css';
import logo from '../assets/cryptoLogo.jpg';

function DetailsPageNav() {
  const location = useLocation();
  return (
    <div>
      <nav className={styles.navBar}>
        <div className={styles.details}>
          {location.pathname !== '/' && (
            <div className="headerBackIcon">
              <NavLink to="/">
                <IoIosArrowBack className={styles.arrowIcon} />
              </NavLink>
            </div>
          )}
          <div>
            <img
              className={styles.logo}
              src={logo}
              alt="logo"
              width="100px"
            />
          </div>
        </div>
        <div className={styles.reactIcons}>
          <div>
            <BiMicrophone />
          </div>
          <div>
            <AiOutlineSetting />
          </div>
        </div>
      </nav>
    </div>
  );
}

export default DetailsPageNav;
