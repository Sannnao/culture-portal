import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { Typography, Grid, Button } from '@material-ui/core';
import DevelopersList from '../developersList';
import UsedTechnology from '../usedTechnology';

const useStyles = makeStyles({
  openSourceSection: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  openSourceSection__openSourceHeader: {
    fontSize: '1vw',
    color: '#ffffff',
  },
  openSourceSection__repositoryLinkButton: {
    padding: '0.5vw 1.5vw',

    color: '#ffffff',
  },
});

const PortalDescription = ({
  textContent: { openSourceSectionHeader, openSourceSectionButton },
  developersList,
}) => {
  const classes = useStyles();

  return (
    <div className="portal-description">
      <Grid
        className={`${classes.openSourceSection} open-source-section`}
        justify="space-between"
        alignItems="center"
      >
        <Typography
          className="openSourceSection__openSourceHeader"
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
        <div className="portal-description__built-with">
          <p>© {new Date().getFullYear()}, Built with &nbsp;</p>
          <UsedTechnology />
        </div>
      </Grid>
      <DevelopersList developers={developersList} />
    </div>
  );
};

export default PortalDescription;
