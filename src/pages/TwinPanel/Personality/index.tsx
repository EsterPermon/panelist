import { useTranslation } from 'react-i18next';
import { ReactComponent as LevelMediumIcon } from '../../../assets/icons/xsmall/levelMedium.svg';
import { ReactComponent as LevelHighIcon } from '../../../assets/icons/xsmall/levelHigh.svg';
import { ReactComponent as LevelLowIcon } from '../../../assets/icons/xsmall/levelLow.svg';
import { PersonalityLevel, PersonalityTraces } from '../../../features/panel/types';
import './styles.css';
import { selectTwinPersonalityTraces } from '../../../features/panel/selectors';
import { useAppSelector } from '../../../store';

const LEVEL_ICON_MAP: Record<PersonalityLevel, React.FC> = {
  high: LevelHighIcon,
  medium: LevelMediumIcon,
  low: LevelLowIcon,
};

const Personality = () => {
  const { t } = useTranslation();
  const traces = useAppSelector(selectTwinPersonalityTraces);

  const tracesKeys = Object.keys(traces) as (keyof PersonalityTraces)[];

  return (
    <div className="personality-outer-container">
      <span className="personality-header">{t('panelist.twinPanel.personality.header')}</span>
      <div className="personality-inner-container">
        {tracesKeys.map((key) => {
          const level = traces[key];
          const LevelIcon = LEVEL_ICON_MAP[level];
          return (
            <div key={key} className="personality-item-container">
              <span className="personality-item-label">{t(`panelist.twinPanel.personality.${key}`)}</span>
              <span className="personality-item-value-container">
                {t(`panelist.twinPanel.personality.level.${traces[key]}`)}
                <span className="personality-item-icon">
                  <LevelIcon />
                </span>
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Personality;
