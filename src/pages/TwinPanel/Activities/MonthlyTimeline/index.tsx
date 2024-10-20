import { useTranslation, Trans } from 'react-i18next';
import { ReactComponent as InsightSearchIcon } from '../../../../assets/icons/xxsmall/insightSearch.svg';
import { ReactComponent as InterviewSearchIcon } from '../../../../assets/icons/xxsmall/interview.svg';
import { ReactComponent as ReviewIcon } from '../../../../assets/icons/xxsmall/review.svg';
import { ReactComponent as SurveyIcon } from '../../../../assets/icons/xxsmall/survey.svg';
import { ReactComponent as TwinCreationIcon } from '../../../../assets/icons/xxsmall/twinCreation.svg';
import { ReactComponent as ChevronUpFolderIcon } from '../../../../assets/icons/xsmall/chevronUpFolder.svg';
import { ReactComponent as ChevronDownFolderIcon } from '../../../../assets/icons/xsmall/chevronDownFolder.svg';
import { formatDate } from '../../../../utils/utils';
import { Activity, ActivityType } from '../../../../features/panel/types';
import React from 'react';
import './styles.css';

const ACTIVITY_ICON_MAP: Record<ActivityType, React.FC> = {
  interview: InterviewSearchIcon,
  insight_search: InsightSearchIcon,
  survey: SurveyIcon,
  twin_creation: TwinCreationIcon,
  review: ReviewIcon,
};

interface MonthlyTimelineProps {
  month: string;
  activities: Activity[];
}

const MonthlyTimeline = (props: MonthlyTimelineProps) => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = React.useState(true);

  return (
    <div className="timeline-container">
      <span className="timeline-header-container" onClick={() => setIsOpen((prev) => !prev)}>
        <span className="timeline-header">{props.month}</span>
        <span className="line" />
        {isOpen ? <ChevronUpFolderIcon /> : <ChevronDownFolderIcon />}
      </span>

      {isOpen
        ? props.activities.map((activity, i) => {
            const isLast = i === props.activities.length - 1;
            const ActivityIcon = ACTIVITY_ICON_MAP[activity.activityType];
            const formattedCompletedAt = formatDate(activity.completedAt);

            return (
              <div key={`activity_${i}`} className="activity-container">
                <div className="activity-subcontainer">
                  <span className="activity-icon-container">
                    <ActivityIcon />
                  </span>
                  <div className="activity-text-container">
                    <span className="activity-text">
                      {/* //!NOTE: Apply styles within translation */}
                      <Trans
                        i18nKey={`panelist.twinPanel.activities.${activity.activityType}`}
                        values={{
                          name: activity.name,
                          source: activity.source,
                        }}
                        components={{
                          bold: <span className="bold-text" />,
                          highlight: <span className="highlight-text" />,
                        }}
                      />
                    </span>
                    <span className="activity-time-label">{formattedCompletedAt}</span>
                  </div>
                </div>

                {isLast ? null : <div className="vertical-line" />}
              </div>
            );
          })
        : null}
    </div>
  );
};

export default MonthlyTimeline;
