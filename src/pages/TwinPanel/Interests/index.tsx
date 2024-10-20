import { useTranslation } from 'react-i18next';
import './styles.css';
import { selectTwinInterests } from '../../../features/panel/selectors';
import { useAppSelector } from '../../../store';

const Interests = () => {
  const { t } = useTranslation();
  const interests = useAppSelector(selectTwinInterests);

  return (
    <div className="interests-outer-container">
      <span className="interests-header">{t('panelist.twinPanel.interests.header')}</span>
      <div className="interests-inner-container">
        {interests.map((item, i) => {
          return (
            <div className="interests-item" key={`interests_${i}`}>
              {item}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Interests;
