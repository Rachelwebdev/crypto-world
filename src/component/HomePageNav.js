import React from 'react';
import { AiOutlineSetting } from 'react-icons/ai';
import { BiMicrophone } from 'react-icons/bi';
import { useSelector } from 'react-redux';
import styles from '../styles/HomePageNav.module.css';
import logo from '../assets/cryptoLogo.jpg';
import { selectCoins } from '../features/HomePage/CoinSlice';

function HomePageNav() {
  const coins = useSelector(selectCoins);

  return (
    <div>
      <nav className={styles.nav}>
        <img
          src={logo}
          alt="logo"
          width="100px"
          className={styles.logo}
        />

        <div className={styles.icons}>
          <div>
            <BiMicrophone />
          </div>
          <div>
            <AiOutlineSetting />
          </div>
        </div>
      </nav>
      <section className={styles.heroSection}>
        <div className={styles.heroSectionText}>
          <div>Coin Wallet</div>
          <div className={styles.coinLength}>
            {coins.length}
            Coins Listed
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePageNav;
