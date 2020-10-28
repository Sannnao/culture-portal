import React, { useContext } from 'react';
import content from '../../storage/initState';

import { makeStyles } from '@material-ui/core/styles';
import { Typography, Grid } from '@material-ui/core';

import AuthorOfTheDay from '../AuthorOfTheDay';

import { LanguageContext } from '../../layout/Layout';

import belorusianLandscape from './assets/belorusian-landscape.jpg';

const useStyles = makeStyles({
  topSection: {
    color: 'white',
    textShadow: '0 0 19px #000000f0',

    backgroundImage: `url(${belorusianLandscape})`,
    backgroundPosition: 'center 60%',
  },
  aboutSection: {
    boxShadow: '0 -22px 15px #00000080',
  },
});

export const Home = ({ authors }) => {
  const classes = useStyles();
  const currentLanguage = useContext(LanguageContext);
  const authorsList =
    authors[
      `allContentfulAuthor${currentLanguage.code[0].toUpperCase() +
        currentLanguage.code.slice(1)}`
    ].edges;
  const currentContent = content[currentLanguage.code];

  const currentDate = new Date().getDay();

  const authorOfTheDay = authorsList[currentDate].node;

  return (
    <React.Fragment>
      <Grid
        className={`${classes.topSection} top-section`}
        container
        direction="column"
        justify="center"
        alignItems="center"
      >
        <Typography
          className="top-section__top-section-header"
          gutterBottom
          variant="h1"
          component="h1"
        >
          {currentContent.home.portalDescription.topSectionHeader}
        </Typography>
      </Grid>
      <Grid
        className={`${classes.aboutSection} about-section`}
        container
        direction="column"
        justify="space-around"
        alignItems="center"
      >
        <Typography
          className="about-section__about-section-header"
          variant="h4"
          color="textSecondary"
          component="p"
        >
          {currentContent.home.portalDescription.aboutSectionHeader}
        </Typography>
      </Grid>
      <AuthorOfTheDay
        authorOfTheDay={authorOfTheDay}
        poetOfTheDay={currentContent.home.poetOfTheDay}
        poetPhoto={authorOfTheDay.mainPicture.file.url}
      />
    </React.Fragment>
  );
};
