import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Administrator } from './types';

interface AdministratorState {
  admin: Administrator;
  loading: boolean;
  error?: string;
}

const initialState: AdministratorState = {
  admin: {
    email: '',
    name: '',
  },
  loading: false,
  error: undefined,
};

// !NOTE: Using createAsyncThunk to support real api requests in the future
export const fetchAdministratorData = createAsyncThunk(
  'administrator/fetchAdministratorData',
  async (): Promise<{ admin: Administrator }> => {
    try {
      const response = await require('../../assets/mock/mockAdmin.json');

      return response;
    } catch (e) {
      return Promise.reject(e);
    }
  }
);

export const administratorSlice = createSlice({
  name: 'administrator',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAdministratorData.pending, (state) => {
        state.loading = true;
        state.error = undefined;
      })
      .addCase(fetchAdministratorData.fulfilled, (state, action) => {
        state.loading = false;
        state.admin = action.payload.admin;
      })
      .addCase(fetchAdministratorData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default administratorSlice.reducer;
