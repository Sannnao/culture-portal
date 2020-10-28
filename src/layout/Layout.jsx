import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { supportedLanguages } from '../components/languagePicker/constants';
import content from '../storage/initState';

import NavBar from '../components/navBar';
import PortalDescription from '../components/portalDescription';
import './layout-1.scss';

export const LanguageContext = React.createContext(supportedLanguages[0]);

export const Layout = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState(supportedLanguages[0]);
  const currentContent = content[currentLanguage.code];

  const handleChange = event => {
    setCurrentLanguage(event.target.value);
  };

  return (
    <LanguageContext.Provider value={currentLanguage}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Culture Portal</title>
      </Helmet>
      <NavBar
        handleChange={handleChange}
        currentLanguage={currentLanguage}
      />
      <main>{children}</main>
      <footer className="footer">
        <PortalDescription
          textContent={currentContent.home.portalDescription}
          developersList={currentContent.home.developersList}
        />
      </footer>
    </LanguageContext.Provider>
  );
};

export default Layout;
