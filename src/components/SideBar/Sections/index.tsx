import { ReactComponent as ChevronRightIcon } from '../../../assets/icons/xsmall/chevronRight.svg';
import { ReactComponent as ChevronDownIcon } from '../../../assets/icons/xsmall/chevronDown.svg';
import { ReactComponent as WebAssetIcon } from '../../../assets/icons/xsmall/webAsset.svg';
import { ReactComponent as SlideTextSparkleIcon } from '../../../assets/icons/xsmall/slideTextSparkle.svg';
import { useTranslation } from 'react-i18next';
import React from 'react';
import './styles.css';

const Sections = () => {
  const { t } = useTranslation();
  const [isMarketingSectionOpen, setIsMarketingSectionOpen] = React.useState(true);
  const [isDevelopmentSectionOpen, setIsDevelopmentSectionOpen] = React.useState(false);

  return (
    <div className="sections-container">
      <span className="sections-header">{t('panelist.sideBar.pagesNavigator.sections.header')}</span>
      <div className="section-folder">
        <div className="section-item" onClick={() => setIsMarketingSectionOpen((prev) => !prev)}>
          {isMarketingSectionOpen ? <ChevronDownIcon /> : <ChevronRightIcon />}
          <span className="section-name">{t('panelist.sideBar.pagesNavigator.sections.marketing')}</span>
        </div>
        {isMarketingSectionOpen ? (
          <div className="subSection-container">
            <div className="section-item">
              <SlideTextSparkleIcon />
              <span className="section-name">{t('panelist.sideBar.pagesNavigator.sections.marketing.insights')}</span>
            </div>
            <div className="section-item">
              <WebAssetIcon />
              <span className="section-name">
                {t('panelist.sideBar.pagesNavigator.sections.marketing.testflights')}
              </span>
            </div>
          </div>
        ) : null}
      </div>
      <div className="section-folder">
        <div className="section-item" onClick={() => setIsDevelopmentSectionOpen((prev) => !prev)}>
          {isDevelopmentSectionOpen ? <ChevronDownIcon /> : <ChevronRightIcon />}
          <span className="section-name">{t('panelist.sideBar.pagesNavigator.sections.development')}</span>
        </div>
      </div>
    </div>
  );
};

export default Sections;
