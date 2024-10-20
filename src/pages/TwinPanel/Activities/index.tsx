import { useTranslation } from 'react-i18next';
import { groupActivitiesHistoryByMonth, sortActivityByCompletedAtDesc } from '../../../utils/utils';
import { useAppSelector } from '../../../store';
import { selectTwinActivitiesHistory } from '../../../features/panel/selectors';
import MonthlyTimeline from './MonthlyTimeline';
import './styles.css';

const Activities = () => {
  const { t } = useTranslation();
  const activitiesHistory = useAppSelector(selectTwinActivitiesHistory);

  const groupedHistory = groupActivitiesHistoryByMonth(activitiesHistory);

  return (
    <div>
      <span className="activities-header">{t('panelist.twinPanel.activities.header')}</span>
      <div className="activities-timeline-container">
        {Object.keys(groupedHistory).map((key) => {
          const activities = groupedHistory[key].sort(sortActivityByCompletedAtDesc);
          return <MonthlyTimeline key={key} month={key} activities={activities} />;
        })}
      </div>
    </div>
  );
};

export default Activities;
