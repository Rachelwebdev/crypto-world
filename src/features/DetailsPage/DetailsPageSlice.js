import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchDetails = createAsyncThunk(
  'detail/getDetails',
  async (id) => {
    const url = `https://api.coinstats.app/public/v1/coins/${id}`;
    const result = await axios(url);
    return result.data;
  },
);

const initialState = {
  coins: [],
  status: 'idle',
  error: null,
};

const detailsSlice = createSlice({
  name: 'details',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDetails.pending, (state) => ({
        ...state,
        status: 'loading',
      }))
      .addCase(fetchDetails.fulfilled, (state, action) => ({
        ...state,
        detail: action.payload,
        status: 'succeeded',
      }))
      .addCase(fetchDetails.rejected, (state, action) => ({
        ...state,
        status: 'failed',
        error: action.error.message,
      }));
  },
});

export const selectDetails = (state) => state.details.detail;
export const selectDetailsStatus = (state) => state.details.status;
export const selectDetailsError = (state) => state.details.error;

export default detailsSlice.reducer;
