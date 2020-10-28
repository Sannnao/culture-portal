import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';

import GithubProfile from '../github-profile';

const useStyles = makeStyles({
  developersListContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '55%',
  },

  developersListContainer__deveolpersListHeader: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '1.2vw',
    color: '#ffffff',
  },

  developersListContainer__developersList: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '95%',
    height: '70%',
  },
});

const DevelopersList = props => {
  const data = useStaticQuery(
    graphql`
      query developersQuery {
        allContentfulDeveloper(sort: {fields: order, order: ASC}) {
          nodes {
            id
            developerPhoto {
              file {
                url
              }
            }
            name
            surname
            githubId
            githubLink
            telegramLink
            taskComplete
            taskAtAll
            teamMembers
          }
        }
      }
    `
  );

  const developersContentful = data.allContentfulDeveloper.nodes;

  const {
    developers: { developersListHeader, developers },
  } = props;

  const classes = useStyles();
  return (
    <Grid
      className={`${classes.developersListContainer} developers-list-container`}
    >
      <Typography
        className={`${classes.developersListContainer__deveolpersListHeader} developers-list-container__deveolpers-list-header`}
        variant="h5"
        component="h3"
      >
        {developersListHeader}
      </Typography>
      <Grid
        className={`${classes.developersListContainer__developersList} developers-list-container__deveolpers-list`}
        container
        justify="space-around"
        alignItems="center"
      >
        {developersContentful.map((developer, i) => {
          const { name, surname } = developers[i];
          const photo = developer.developerPhoto.file.url;
          const {
            id,
            githubId,
            githubLink,
            telegramLink,
            taskComplete,
            taskAtAll,
            teamMembers,
          } = developer;

          return (
            <GithubProfile
              key={id}
              githubImg={photo}
              name={name}
              surname={surname}
              githubLink={githubLink}
              githubNickname={githubId}
              contactLink={telegramLink}
              tasksCreated={taskComplete}
              tasksAll={taskAtAll}
              teamMembers={teamMembers}
            />
          );
        })}
      </Grid>
    </Grid>
  );
};

export default DevelopersList;
