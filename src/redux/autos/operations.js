import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://661bf640e7b95ad7fa6966ae.mockapi.io/advert';

export const fetchAutos = createAsyncThunk('autos', async (page, thunkAPI) => {
  try {
    const { data } = await axios.get(`advert?page=${page}&limit=4`);
    return data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
});
