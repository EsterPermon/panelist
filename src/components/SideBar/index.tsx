import PagesNavigator from './PagesNavigator';
import Workspace from './Workspace';
import React from 'react';
import { useAppDispatch, useAppSelector } from '../../store';
import { useTranslation } from 'react-i18next';
import { selectAdminError, selectIsLoadingAdmin } from '../../features/administrator/selectors';
import { fetchAdministratorData } from '../../features/administrator/administratorSlice';
import Sections from './Sections';
import './styles.css';

const SideBar = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const adminError = useAppSelector(selectAdminError);
  const isLoadingAdmin = useAppSelector(selectIsLoadingAdmin);

  React.useEffect(() => {
    dispatch(fetchAdministratorData());
  }, [dispatch]);

  if (isLoadingAdmin) {
    return <div>{t('panelist.loadingMessage')}</div>;
  }

  if (adminError) {
    return (
      <div>
        {t('panelist.errorMessage', {
          error: adminError,
        })}
      </div>
    );
  }

  return (
    <div className="side-bar-container">
      <Workspace />
      <PagesNavigator />
      <Sections />
    </div>
  );
};

export default SideBar;
