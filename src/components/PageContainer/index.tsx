import React from 'react';
import { useTranslation } from 'react-i18next';
import { useAppDispatch, useAppSelector } from '../../store';
import { Outlet } from 'react-router-dom';
import TopBar from './TopBar';
import { fetchPanelData } from '../../features/panel/panelSlice';
import { selectIsLoadingPanel, selectPanelError } from '../../features/panel/selectors';
import './styles.css';

const PageContainer = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const panelError = useAppSelector(selectPanelError);
  const isLoadingPanel = useAppSelector(selectIsLoadingPanel);

  React.useEffect(() => {
    dispatch(fetchPanelData());
  }, [dispatch]);

  if (isLoadingPanel) {
    return <div>{t('panelist.loadingMessage')}</div>;
  }

  if (panelError) {
    return (
      <div>
        {t('panelist.errorMessage', {
          panelError,
        })}
      </div>
    );
  }

  return (
    <div className="page-container">
      <TopBar />
      {/* //!NOTE: Outlet takes care of rendering the children routes */}
      <Outlet />
    </div>
  );
};

export default PageContainer;
