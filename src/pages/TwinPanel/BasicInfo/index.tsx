import { useTranslation } from 'react-i18next';
import { formatDate } from '../../../utils/utils';
import './styles.css';
import { useAppSelector } from '../../../store';
import { selectTwinData } from '../../../features/panel/selectors';

const BasicInfo = () => {
  const { t } = useTranslation();
  const twin = useAppSelector(selectTwinData);

  const formattedCreatedAt = formatDate(twin.createdAt);
  const formattedLastUpdatedAt = formatDate(twin.lastUpdatedAt);

  return (
    <div className="basic-info-container">
      <span className="basic-info-header">{t('panelist.twinPanel.basicInfo.header')}</span>
      <div className="info-detail">
        <span className="info-detail-label">{t('panelist.twinPanel.basicInfo.firstNameLabel')}</span>
        <span className="info-detail-value">{twin.firstname}</span>
      </div>
      <div className="info-detail">
        <span className="info-detail-label">{t('panelist.twinPanel.basicInfo.lastNameLabel')} </span>
        <span className="info-detail-value">{twin.lastname}</span>
      </div>
      <div className="info-detail">
        <span className="info-detail-label">{t('panelist.twinPanel.basicInfo.emailLabel')} </span>
        <span className="info-detail-value">{twin.email}</span>
      </div>
      <div className="info-detail">
        <span className="info-detail-label">{t('panelist.twinPanel.basicInfo.createdLabel')}</span>
        <span className="info-detail-value">{formattedCreatedAt}</span>
      </div>
      <div className="info-detail">
        <span className="info-detail-label">{t('panelist.twinPanel.basicInfo.updatedLabel')} </span>
        <span className="info-detail-value">{formattedLastUpdatedAt}</span>
      </div>
    </div>
  );
};

export default BasicInfo;
