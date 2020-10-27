import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardActionArea, Typography, Grid, Avatar, SvgIcon } from '@material-ui/core';

import icons from './assets/svg-icons';

const useStyles = makeStyles({
  githubCard: {
    width: '15%',
    height: '65%',
  },
  actionArea: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    height: '80%',
    paddingBottom: '2%',
  },
  githubCardContent__profileImage: {
    width: 110,
    height: 110,
  },
  githubCardContent__profileNickname: {
    marginTop: '5%',
    marginBottom: 0,
    fontSize: '20px',
  },
  githubCardContent__profileName: {
    fontSize: '14px',
  },
  profileSocials: {
    display: 'flex',
    alignItems: 'center',
    height: '20%',
  },
  profileSocials__profileSocialIcon: {
    height: '20px',
    width: '20px',
  }
});

const GithubProfile = props => {
  const {
    githubImg,
    name,
    surname,
    githubLink,
    githubNickname,
    contactLink,
  } = props;

  const classes = useStyles();

  return (
    <Card className={`${classes.githubCard} gh-gard`}>
      <CardActionArea className={classes.actionArea} href={githubLink}>
        <Grid
          className={classes.githubCardContent}
          container
          direction="column"
          justify="center"
          alignItems="center"
        >
          <Grid container justify="center" alignItems="center">
            <Avatar className={`${classes.githubCardContent__profileImage} gh-photo`} src={githubImg} />
          </Grid>
          <Grid container direction="column" justify="center" alignItems="center">
            <Typography
              className={`${classes.githubCardContent__profileNickname} gh-nick-name`}
              gutterBottom
              variant="h5"
              component="h2"
            >
              {githubNickname}
            </Typography>
            <Typography
              className={`${classes.githubCardContent__profileName} gh-name`}
              variant="body2"
              color="textSecondary"
              component="p"
            >
              {name} {surname}
            </Typography>
          </Grid>
        </Grid>
      </CardActionArea>
      <CardActionArea className={classes.profileSocials} href={contactLink}>
        <Grid container justify="center" alignItems="center">
          <SvgIcon className={`${classes.profileSocials__profileSocialIcon} tg-icon`}>
            <path d={icons.telegram} />
          </SvgIcon>
        </Grid>
      </CardActionArea>
    </Card>
  );
};

export default GithubProfile;
