import React from 'react';

import { useSelector } from 'react-redux';
import DetailsPageNav from './DetailsPageNav';
import styles from '../styles/DetailsPage.module.css';
import {
  selectDetails,
  selectDetailsStatus,
  selectDetailsError,
} from '../features/DetailsPage/DetailsPageSlice';

function DetailsPage() {
  const detail = useSelector(selectDetails);

  const detailStatus = useSelector(selectDetailsStatus);
  const detailsError = useSelector(selectDetailsError);

  if (detailStatus === 'loading') {
    return <h1 className={styles.loading}>Loading...</h1>;
  }

  if (detailsError === 'failed') {
    return (
      <div>
        Error:
        {detailsError}
      </div>
    );
  }

  return (
    <>
      <DetailsPageNav />
      {detail && (
        <main className={styles.container}>
          <section className={styles.heroSection}>
            <div className={styles.heroSectionText}>
              <div className={styles.img}>
                <img
                  src={detail.icon}
                  alt={detail.name}
                  width="100px"
                />
              </div>
              <div>
                <div>{detail.name}</div>
                <div className={styles.ptag}>
                  <div>{detail.symbol}</div>
                  {/* {detail.market_data.current_price.usd} */}
                </div>
              </div>
            </div>
          </section>

          <section className={styles.coinDetailsHeader}>
            <h3>Coin Details</h3>
          </section>
          <div className={styles.coinDetailsInfo}>
            <table>
              <tbody>
                <tr>
                  <td>Name: </td>
                  <td>{detail.name}</td>
                </tr>
                <tr>
                  <td>USD Price: </td>
                  <td>{detail.price}</td>
                </tr>
                <tr>
                  <td>Bitcoin Price: </td>
                  <td>{detail.priceBtc}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <section className="coinDetails">
            <div className={styles.coinDetailsHeader}>
              <h3>More Info</h3>
            </div>
            <div className={styles.coinDetailsInfo}>
              <table>
                <tbody>
                  <tr>
                    <td>Market Rank: </td>
                    <td>{detail.market_cap_rank}</td>
                  </tr>
                  <tr>
                    <td>Percentage Change: </td>
                    <td>{detail.priceChange1d}</td>
                  </tr>
                  <tr>
                    <td>Available Supply: </td>
                    <td>{detail.availableSupply}</td>
                  </tr>
                  <tr>
                    <td>Total Supply: </td>
                    <td>{detail.totalSupply}</td>
                  </tr>
                  <tr>
                    <td>Market Cap: </td>
                    <td>{detail.marketCap}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        </main>
      )}
    </>
  );
}

export default DetailsPage;
