import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { makeStyles } from '@material-ui/core/styles';
import { Card, Grid, Avatar } from '@material-ui/core';

const useStyles = makeStyles({
  technologiesContainer: {
    display: 'flex',
  },
  technologyCard: {
    margin: '0 5px',
  },
  technologyImage: {
    height: '40px',
    width: '40px',
  },
});

const UsedTechnology = () => {
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
            linkToTech
          }
        }
      }
    `
  );

  const technologies = data.allContentfulTechnology.nodes;
  const classes = useStyles();

  return (
      <Grid className={classes.technologiesContainer}>
        {technologies.map(tech => {
          const { id, logo, linkToTech } = tech;
          const icon = logo.file.url;

          return (
            <a
              href={linkToTech}
              target='_blank'
              key={id}
              className={classes.technologyCard}
            >
                <img
                  className={classes.technologyImage}
                  src={icon}
                />
            </a>
          );
        })}
      </Grid>
  );
};

export default UsedTechnology;
