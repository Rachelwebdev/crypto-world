import { configureStore } from '@reduxjs/toolkit';
import coinsReducer from './CoinSlice';

const store = configureStore({
  reducer: {
    coins: coinsReducer,
  },
});
export default store;
