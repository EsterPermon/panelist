import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../../store';

export const selectPanelError = (state: RootState) => state.panel.error;

export const selectIsLoadingPanel = (state: RootState) => state.panel.loading;

export const selectPanelData = (state: RootState) => state.panel.panelData;

// !NOTE: Ideally we should have a way to switch between twins and select them by id
export const selectTwinData = createSelector(selectPanelData, (panelData) => panelData?.twins[0]);

export const selectTwinActivitiesHistory = createSelector(selectTwinData, (twin) => twin?.activitiesHistory);

export const selectTwinInterests = createSelector(selectTwinData, (twin) => twin?.interests);

export const selectTwinPersonalityTraces = createSelector(selectTwinData, (twin) => twin?.personalityTraces);

export const selectTwinSociodemographics = createSelector(selectTwinData, (twin) => twin?.sociodemographics);
