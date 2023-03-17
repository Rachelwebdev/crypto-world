import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchCoins = createAsyncThunk('coins/fetchCoins', async () => {
  const response = await axios.get('https://api.coinstats.app/public/v1/coins');
  return response.data.coins;
});

const initialState = {
  coins: [],
  status: 'idle',
  error: null,
};

const coinsSlice = createSlice({
  name: 'coins',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCoins.pending, (state) => ({
      ...state,
      status: 'loading',
    }));
    builder.addCase(fetchCoins.fulfilled, (state, action) => ({
      ...state,
      status: 'succeeded',
      coins: action.payload,
    }));
    builder.addCase(fetchCoins.rejected, (state, action) => ({
      ...state,
      status: 'failed',
      error: action.error.message,
    }));
  },
});

export const selectCoins = (state) => state.coins.coins;
export const selectCoinsStatus = (state) => state.coins.status;
export const selectCoinsError = (state) => state.coins.error;

export default coinsSlice.reducer;
