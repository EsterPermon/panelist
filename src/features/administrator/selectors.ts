import { RootState } from '../../store';

export const selectAdminError = (state: RootState) => state.administrator.error;

export const selectIsLoadingAdmin = (state: RootState) => state.administrator.loading;

export const selectAdminData = (state: RootState) => state.administrator.admin;
