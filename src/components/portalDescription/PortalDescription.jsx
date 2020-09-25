import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import { makeStyles } from '@material-ui/core/styles';
import { Typography, Grid, SvgIcon, Button } from '@material-ui/core';

import UsedTechnology from '../usedTechnology';

import belorusianLandscape from './assets/belorusian-landscape.jpg';
import svgIcons from './assets/svg-icons';

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
  usedTecnologiesContainer: {
    background: 'linear-gradient(#ffffff, #eeeeee)',
  },
  openSourceSection: {
    background: 'linear-gradient(#eeeeee, #ffffff)',
  },
  openSourceSection__repositoryLinkButton: {
    padding: '0.8vw 1.5vw',

    color: '#ffffff',
    fontWeight: 'bold',
  },
});

const PortalDescription = props => {
  const data = useStaticQuery(
    graphql`
      query technologyQuery {
        allContentfulTechnology(sort: { fields: order, order: ASC }) {
          nodes {
            id
            logo {
              file {
                url
              }
            }
            technology
            order
          }
        }
      }
    `
  );

  const technologies = data.allContentfulTechnology.nodes;

  const {
    textContent: {
      topSectionHeader,
      aboutSectionHeader,
      usedTechnologies,
      openSourceSectionHeader,
      openSourceSectionButton,
    },
  } = props;

  const classes = useStyles();

  return (
    <React.Fragment>
      {/* Top section with image */}
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
          {topSectionHeader}
        </Typography>
      </Grid>

      {/* Section with short 'about' info */}
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
          {aboutSectionHeader}
        </Typography>
        <SvgIcon className="about-section__reading-icon">
          <path d={svgIcons.reading} />
        </SvgIcon>
      </Grid>

      {/* Section with used technologies info */}
      <Grid
        className={`${classes.usedTecnologiesContainer} used-tecnologies-container`}
        container
        justify="space-around"
        alignItems="center"
      >
        <Typography
          className="used-tecnologies-container__used-technologies-header"
          variant="h4"
          color="textSecondary"
          component="p"
        >
          {usedTechnologies}
        </Typography>
        <Grid container justify="space-around" alignItems="center">
          {technologies.map(tech => {
            const { id, technology, logo } = tech;
            const icon = logo.file.url;

            return (
              <UsedTechnology
                key={id}
                tecnologyImg={icon}
                tecnologyName={technology}
              />
            );
          })}
        </Grid>
      </Grid>

      {/* Section with sources info */}
      <Grid
        className={`${classes.openSourceSection} open-source-section`}
        container
        direction="column"
        justify="space-around"
        alignItems="center"
      >
        <Typography
          className="open-source-section__open-source-header"
          variant="h4"
          color="textSecondary"
          component="p"
        >
          {openSourceSectionHeader}
        </Typography>

        <Button
          variant="contained"
          color="primary"
          className={`${classes.openSourceSection__repositoryLinkButton} open-source-section__open-source-button`}
          href="https://github.com/Sannnao/culture-portal"
          alt="To GitHub"
          target="_blank"
        >
          {openSourceSectionButton}
        </Button>
      </Grid>
    </React.Fragment>
  );
};

export default PortalDescription;
