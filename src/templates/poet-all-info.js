import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Grid } from '@material-ui/core';

import PoetTitle from '../components/poetAllInfo/title';
import PoetBiograpyhy from '../components/poetAllInfo/timeline';
import PoetWorks from '../components/poetAllInfo/works';
import PoetVideo from '../components/poetAllInfo/video';
import PoetMap from '../components/poetAllInfo/map';
import PoetGallery from '../components/poetAllInfo/gallery';

import { LanguageContext } from '../layout/Layout';
// import content from '../storage/initState';
import './style.scss';

import { Layout } from '../layout/Layout';

const useStyles = makeStyles(theme => ({
  poetAllInfoContainer: {
    height: '100%',
    paddingTop: '6vw',
    backgroundColor: '#eeeeee',
  },
  poetAllInfoRoot: {
    width: '75vw',
    padding: theme.spacing(3),
  },
}));

const PoetAllInfo = ({ pageContext }) => {
  const classes = useStyles();
  const currentLanguage = useContext(LanguageContext);
  const { indexData } = pageContext;
  const langString = currentLanguage.code[0].toUpperCase() + currentLanguage.code.slice(1);
  console.log(currentLanguage);

  const {
    name,
    surname,
    yearsOfLife,
    biography,
    mainPicture,
    videoId,
    listOfWorks,
    placesOfActivity,
    gallery,
  } = pageContext.resultData[
    `allContentfulAuthor${langString}`
  ].edges[indexData].node;

  const {
    biographyTitle,
    worksTitle,
    firstColumnTitle,
    secondColumnTitle,
    watchVideoTitle,
    galleryTitle,
  } = pageContext.resultData[
    `contentfulPoetPageInterface${langString}`
    ];

  const poetInfo = { name, surname, yearsOfLife, mainPicture };

  const tableInterface = {
    title: worksTitle,
    firstColumnName: firstColumnTitle,
    secondColumnName: secondColumnTitle,
  };

  return (
    <Layout>
      <Grid container className={`${classes.poetAllInfoContainer} poet-page-containter`} justify="center">
        <Paper className={`${classes.poetAllInfoRoot} poet-page-wrapper`}>
          <PoetTitle poetInfo={poetInfo} />
          <PoetBiograpyhy poetBio={biography} title={biographyTitle} />
          <PoetWorks listOfWorks={listOfWorks} interface={tableInterface} />
          <PoetVideo videoId={videoId} videoTitle={watchVideoTitle} />
          <PoetMap
            markers={placesOfActivity}
            center={placesOfActivity[0].mapLink}
            title="Map"
          />
          <PoetGallery images={gallery} title={galleryTitle} />
        </Paper>
      </Grid>
    </Layout>
  );
};

export default PoetAllInfo;
