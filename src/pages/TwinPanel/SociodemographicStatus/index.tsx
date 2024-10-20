import { useTranslation } from 'react-i18next';
import { ReactComponent as PersonIcon } from '../../../assets/icons/xsmall/person.svg';
import { ReactComponent as HistoryIcon } from '../../../assets/icons/xsmall/history.svg';
import { ReactComponent as LocationIcon } from '../../../assets/icons/xsmall/location.svg';
import { ReactComponent as HeartIcon } from '../../../assets/icons/xsmall/heart.svg';
import { ReactComponent as PeopleIcon } from '../../../assets/icons/xsmall/people.svg';
import { ReactComponent as WalletCreditCardIcon } from '../../../assets/icons/xsmall/walletCreditCard.svg';
import { ReactComponent as BriefcaseIcon } from '../../../assets/icons/xsmall/briefcase.svg';
import { useAppSelector } from '../../../store';
import { selectTwinSociodemographics } from '../../../features/panel/selectors';
import './styles.css';

const SociodemographicStatus = () => {
  const { t } = useTranslation();
  const sociodemographics = useAppSelector(selectTwinSociodemographics);

  return (
    <div className="sociodemo-outer-container">
      <span className="sociodemo-header">{t('panelist.twinPanel.sociodemographic.header')}</span>
      <div className="sociodemo-inner-container">
        <div className="status-item-container">
          <span className="status-item-label-container">
            <span className="status-item-icon">
              <PersonIcon />
            </span>
            {t('panelist.twinPanel.sociodemographic.genderLabel')}
          </span>
          <span className="status-item-value">
            {t(`panelist.twinPanel.sociodemographic.gender.${sociodemographics.gender}`)}
          </span>
        </div>
        <div className="status-item-container">
          <span className="status-item-label-container">
            <span className="status-item-icon">
              <HistoryIcon />
            </span>
            {t('panelist.twinPanel.sociodemographic.ageLabel')}
          </span>
          <span className="status-item-value">{sociodemographics.age}</span>
        </div>
        <div className="status-item-container">
          <span className="status-item-label-container">
            <span className="status-item-icon">
              <LocationIcon />
            </span>
            {t('panelist.twinPanel.sociodemographic.residenceLabel')}
          </span>
          <span className="status-item-value">{sociodemographics.residence}</span>
        </div>
        <div className="status-item-container">
          <span className="status-item-label-container">
            <span className="status-item-icon">
              <HeartIcon />
            </span>
            {t('panelist.twinPanel.sociodemographic.maritalStatusLabel')}
          </span>
          <span className="status-item-value">
            {t(`panelist.twinPanel.sociodemographic.maritalStatus.${sociodemographics.maritalStatus}`)}
          </span>
        </div>
        <div className="status-item-container">
          <span className="status-item-label-container">
            <span className="status-item-icon">
              <PeopleIcon />
            </span>
            {t('panelist.twinPanel.sociodemographic.childrenLabel')}
          </span>
          <span className="status-item-value">{sociodemographics.children}</span>
        </div>
        <div className="status-item-container">
          <span className="status-item-label-container">
            <span className="status-item-icon">
              <WalletCreditCardIcon />
            </span>
            {t('panelist.twinPanel.sociodemographic.householdIncomeLabel')}
          </span>
          <span className="status-item-value">{sociodemographics.householdIncome}</span>
        </div>
        <div className="status-item-container">
          <span className="status-item-label-container">
            <span className="status-item-icon">
              <BriefcaseIcon />
            </span>
            {t('panelist.twinPanel.sociodemographic.professionLabel')}
          </span>
          <span className="status-item-value">{sociodemographics.profession}</span>
        </div>
      </div>
    </div>
  );
};

export default SociodemographicStatus;
