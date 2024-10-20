import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import panelReducer from './features/panel/panelSlice';
import adminReducer from './features/administrator/administratorSlice';

export const store = configureStore({
  reducer: {
    panel: panelReducer,
    administrator: adminReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
