import { useTranslation } from 'react-i18next';
import { ReactComponent as WorkspaceImageIcon } from '../../../assets/icons/medium/workspaceImage.svg';
import { ReactComponent as ChevronUpDownIcon } from '../../../assets/icons/xsmall/chevronUpDown.svg';
import { useAppSelector } from '../../../store';
import './styles.css';
import { selectAdminData } from '../../../features/administrator/selectors';

const Workspace = () => {
  const { t } = useTranslation();
  const adminData = useAppSelector(selectAdminData);

  if (!adminData) {
    return <div>{t('panelist.noAdminData')}</div>;
  }

  return (
    <div className="workspace-container">
      <WorkspaceImageIcon />
      <div className="admin-info">
        <span className="admin-name">{adminData.name}</span>
        <span className="admin-email">{adminData.email}</span>
      </div>
      <ChevronUpDownIcon />
    </div>
  );
};

export default Workspace;
