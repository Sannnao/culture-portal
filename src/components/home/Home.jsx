import React, { useContext } from 'react';
import content from '../../storage/initState';

import PortalDescription from '../portalDescription';
import AuthorOfTheDay from '../AuthorOfTheDay';
import DevelopersList from '../developersList';
import { LanguageContext } from '../../layout/Layout';

export const Home = ({ authors }) => {
    const currentLanguage = useContext(LanguageContext);
    const authorsList = authors[`allContentfulAuthor${currentLanguage.code[0].toUpperCase() + currentLanguage.code.slice(1)}`].edges;
    const currentContent = content[currentLanguage.code];

    const currentDate = new Date().getDay();

    const authorOfTheDay = authorsList[currentDate].node;

    return (
      <React.Fragment>
        <PortalDescription
          textContent={currentContent.home.portalDescription}
        />
        <AuthorOfTheDay
          authorOfTheDay={authorOfTheDay}
          poetOfTheDay={currentContent.home.poetOfTheDay}
          poetPhoto={authorOfTheDay.mainPicture.file.url}
        />
        <DevelopersList
          developers={currentContent.home.developersList}
        />
      </React.Fragment>
    );
}
