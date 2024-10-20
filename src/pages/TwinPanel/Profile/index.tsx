import { useTranslation } from 'react-i18next';
// ! NOTE: ideally user profile icon should also come from BE
import { ReactComponent as UserProfileImageIcon } from '../../../assets/icons/medium/userProfileImage.svg';
import { ReactComponent as PersonIcon } from '../../../assets/icons/xsmall/person.svg';
import { ReactComponent as MailIcon } from '../../../assets/icons/xsmall/mail.svg';
import { ReactComponent as ClockIcon } from '../../../assets/icons/xsmall/clock.svg';
import { ReactComponent as FolderMultipleIcon } from '../../../assets/icons/xsmall/folderMultiple.svg';
import { formatDate } from '../../../utils/utils';
import { useAppSelector } from '../../../store';
import { selectTwinData } from '../../../features/panel/selectors';
import './styles.css';

const Profile = () => {
  const { t } = useTranslation();
  const twin = useAppSelector(selectTwinData);
  const formattedCreatedAt = formatDate(twin.createdAt);
  const formattedLastUpdatedAt = formatDate(twin.lastUpdatedAt);

  return (
    <div className="profile-container">
      <div className="twin-container">
        <UserProfileImageIcon />
        <div className="twin-info-container">
          <span className="twin-header">
            {twin.firstname} {twin.lastname}
          </span>
          <span className="twin-subheader">
            {t('panelist.twinPanel.profile.joinedLabel')} {formattedCreatedAt}
          </span>
        </div>
      </div>
      <div className="twin-details-container">
        <span className="twin-detail">
          <PersonIcon />
          <span className="twin-detail-label">{twin.id}</span>
        </span>
        <span className="twin-detail">
          <MailIcon />
          <span className="twin-detail-label">{twin.email}</span>
        </span>
        <span className="twin-detail">
          <ClockIcon />
          <span className="twin-detail">
            <span className="twin-detail-label">
              {t('panelist.twinPanel.profile.lastContactLabel')} {formattedLastUpdatedAt}
            </span>
          </span>
        </span>
        <span className="twin-detail">
          <FolderMultipleIcon />
          <span className="twin-detail-label status">{t(`panelist.twinPanel.profile.status.${twin.status}`)}</span>
        </span>
      </div>
    </div>
  );
};

export default Profile;
