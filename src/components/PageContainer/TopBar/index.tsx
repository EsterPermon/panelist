import { useTranslation } from 'react-i18next';
import IconButton from '../../UI/IconButton';
import { ReactComponent as ArrowLeftIcon } from '../../../assets/icons/xsmall/arrowLeft.svg';
import { useNavigate } from 'react-router-dom';
import './styles.css';

const TopBar = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <div onClick={() => navigate('/')} className="topBar-container">
      <IconButton label={t('panelist.panel.topBar.buttonLabel')} onClick={() => null} icon={ArrowLeftIcon} />
    </div>
  );
};

export default TopBar;
