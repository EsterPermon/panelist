import Profile from './Profile';
import BasicInfo from './BasicInfo';
import SociodemographicStatus from './SociodemographicStatus';
import Personality from './Personality';
import Interests from './Interests';
import Activities from './Activities';
import { useAppSelector } from '../../store';
import { selectTwinData } from '../../features/panel/selectors';
import { useTranslation } from 'react-i18next';
import './styles.css';

const TwinPanel = () => {
  const twin = useAppSelector(selectTwinData);
  const { t } = useTranslation();

  if (!twin) {
    return <div>{t('panelist.noTwinData')}</div>;
  }

  return (
    <div className="twin-panel-container">
      <div className="twin-panel-subcontainer-left">
        <Profile />
        <BasicInfo />
      </div>
      <div className="twin-panel-subcontainer-right">
        <div className="twin-panel-subcontainer-right-top">
          <SociodemographicStatus />
          <Personality />
        </div>
        <div>
          <Interests />
          <Activities />
        </div>
      </div>
    </div>
  );
};

export default TwinPanel;
