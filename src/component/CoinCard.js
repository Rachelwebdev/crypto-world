import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BsArrowUpRightSquare } from 'react-icons/bs';
import {
  fetchCoins,
  selectCoins,
  selectCoinsError,
  selectCoinsStatus,
} from '../features/CoinSlice';
import styles from '../styles/CoinCard.module.css';

function CoinCard() {
  const dispatch = useDispatch();
  const coins = useSelector(selectCoins);
  const coinsStatus = useSelector(selectCoinsStatus);
  const coinsError = useSelector(selectCoinsError);

  useEffect(() => {
    dispatch(fetchCoins());
  }, [dispatch]);

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
      {coins.map((coin) => (
        <div
          key={coin.id}
          className={styles.coinCard}
        >
          <img
            src={coin.icon}
            alt="coin logo"
            className={styles.logo}
          />
          <div className={styles.description}>
            <h2 className={styles.coinName}>{coin.name}</h2>
            <h4 className={styles.coinPrice}>{coin.price}</h4>
            <h6 className={styles.coinRank}>{coin.rank}</h6>
          </div>
          <BsArrowUpRightSquare />
        </div>
      ))}
    </>
  );
}

export default CoinCard;
