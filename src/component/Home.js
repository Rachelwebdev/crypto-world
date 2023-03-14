import React, { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { BsArrowUpRightSquare } from 'react-icons/bs';
import styles from '../styles/Home.module.css';

import {
  fetchCoins,
  selectCoins,
  selectCoinsError,
  selectCoinsStatus,
} from '../features/HomePage/CoinSlice';
import HomePageNav from './HomePageNav';

function Home() {
  const dispatch = useDispatch();
  const [search, setSearch] = useSearchParams();
  const coins = useSelector(selectCoins);
  const coinsStatus = useSelector(selectCoinsStatus);
  const coinsError = useSelector(selectCoinsError);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchCoins());
  }, [dispatch]);

  const clickArrow = (id) => {
    navigate(`/details/${id}`);
  };

  if (coinsStatus === 'loading') {
    return <div>Loading...</div>;
  }

  if (coinsStatus === 'failed') {
    return (
      <div>
        Error:
        {coinsError}
      </div>
    );
  }

  return (
    <>
      <main className={styles.homeContainer}>
        <HomePageNav />
        <input
          type="text"
          placeholder="Search Coin"
          value={search.get('filter') || ''}
          onChange={(e) => {
            const filter = e.target.value;
            if (filter) {
              setSearch({ filter });
            } else {
              setSearch({});
            }
          }}
        />
        <div className={styles.bodySection}>
          {coins
            .filter((coin) => {
              const filter = search.get('filter');
              if (!filter) return true;
              const name = coin.name.toLowerCase();
              return name.startsWith(filter.toLowerCase());
            })
            .map((data) => (
              <div
                key={data.id}
                className={styles.coinCard}
              >
                <img
                  src={data.icon}
                  alt="coin logo"
                  className={styles.coinLogo}
                />
                <div className={styles.description}>
                  <h2 className={styles.coinName}>{data.name}</h2>
                  <h4 className={styles.coinPrice}>{data.price}</h4>
                  <BsArrowUpRightSquare
                    className={styles.arrowIcon}
                    onClick={() => clickArrow(data.id)}
                  />
                </div>
              </div>
            ))}
        </div>
      </main>
    </>
  );
}

export default Home;
