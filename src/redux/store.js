import { configureStore } from '@reduxjs/toolkit';
import coinsReducer from './HomePage/CoinSlice';
import detailsReducer from './DetailsPage/DetailsPageSlice';

const store = configureStore({
  reducer: {
    coins: coinsReducer,
    details: detailsReducer,
  },
});
export default store;
