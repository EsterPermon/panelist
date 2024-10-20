import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { PanelData } from './types';

interface PanelState {
  panelData: PanelData;
  loading: boolean;
  error?: string;
}

const initialState: PanelState = {
  panelData: {
    twins: [],
  },
  loading: false,
  error: undefined,
};

// !NOTE: Using createAsyncThunk to support real api requests in the future
export const fetchPanelData = createAsyncThunk('panel/fetchPanelData', async (): Promise<{ panel: PanelData }> => {
  try {
    const response = await require('../../assets/mock/mockPanel.json');
    return response;
  } catch (e) {
    return Promise.reject(e);
  }
});

export const panelSlice = createSlice({
  name: 'panel',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPanelData.pending, (state) => {
        state.loading = true;
        state.error = undefined;
      })
      .addCase(fetchPanelData.fulfilled, (state, action) => {
        state.loading = false;
        state.panelData = action.payload.panel;
      })
      .addCase(fetchPanelData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default panelSlice.reducer;
