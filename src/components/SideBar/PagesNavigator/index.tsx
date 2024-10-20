import { Link } from 'react-router-dom';
import { ReactComponent as BotSparkleIcon } from '../../../assets/icons/small/botSparkle.svg';
import { ReactComponent as HomeIcon } from '../../../assets/icons/small/home.svg';
import { ReactComponent as PeopleIcon } from '../../../assets/icons/small/people.svg';
import { useTranslation } from 'react-i18next';
import './styles.css';

const PagesNavigator = () => {
  const { t } = useTranslation();

  return (
    <nav className="navigator-container">
      <Link to="/home" className="navigation-link">
        <HomeIcon />
        <span className="link-text">{t('panelist.sideBar.pagesNavigator.home')}</span>
      </Link>
      <Link to="/teams" className="navigation-link">
        <PeopleIcon />
        <span className="link-text">{t('panelist.sideBar.pagesNavigator.teams')}</span>
      </Link>
      <Link to="/twin-panel" className="navigation-link">
        <BotSparkleIcon />
        <span className="link-text">{t('panelist.sideBar.pagesNavigator.twinPanel')}</span>
      </Link>
    </nav>
  );
};

export default PagesNavigator;
