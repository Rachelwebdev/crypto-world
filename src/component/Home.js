import React from 'react';
import styles from '../styles/Home.module.css';
import CoinCard from './CoinCard';

const Home = () => (
  <main className={styles.homeContainer}>
    <h1 className={styles.mainHeading}>CRYPTOCOINS</h1>
    <div className={styles.coinContainer}>
      <h5 className={styles.coinHeading}>STATS BY COUNTRY</h5>
      <div className={styles.coinCards}>
        <CoinCard />
      </div>
    </div>
  </main>
);

export default Home;
