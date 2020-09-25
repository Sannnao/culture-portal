import React from 'react';
import { graphql } from 'gatsby';

import { Layout } from '../layout/Layout';

import { Home } from '../components/home/Home';

const IndexPage = ({ data }) => {
  const authors = data;

  return (
    <Layout>
      <Home authors={authors} />
    </Layout>
  );
};

export const query = graphql`
  query authorsQuery {
    allContentfulAuthorEnglish(sort: { fields: order, order: DESC }) {
      edges {
        node {
          id
          order
          slug
          name
          surname
          yearsOfLife
          city
          videoId
          mainPicture {
            file {
              url
            }
          }
          biography {
            date
            content
          }
          listOfWorks {
            id
            date
            work
          }
          gallery {
            file {
              url
            }
          }
          placesOfActivity {
            id
            activity
            mapLink {
              lat
              lng
            }
          }
        }
      }
    }
    allContentfulAuthorRussian(sort: { fields: order, order: DESC }) {
      edges {
        node {
          id
          order
          slug
          name
          surname
          yearsOfLife
          city
          videoId
          mainPicture {
            file {
              url
            }
          }
          biography {
            date
            content
          }
          listOfWorks {
            id
            date
            work
          }
          gallery {
            file {
              url
            }
          }
          placesOfActivity {
            id
            activity
            mapLink {
              lat
              lng
            }
          }
        }
      }
    }
    allContentfulAuthorBelarusian(sort: { fields: order, order: DESC }) {
      edges {
        node {
          id
          order
          slug
          name
          surname
          yearsOfLife
          city
          videoId
          mainPicture {
            file {
              url
            }
          }
          biography {
            date
            content
          }
          listOfWorks {
            id
            date
            work
          }
          gallery {
            file {
              url
            }
          }
          placesOfActivity {
            id
            activity
            mapLink {
              lat
              lng
            }
          }
        }
      }
    }
    contentfulPoetPageInterfaceEnglish {
      biographyTitle
      worksTitle
      firstColumnTitle
      secondColumnTitle
      watchVideoTitle
      galleryTitle
    }
    contentfulPoetPageInterfaceRussian {
      biographyTitle
      worksTitle
      firstColumnTitle
      secondColumnTitle
      watchVideoTitle
      galleryTitle
    }
    contentfulPoetPageInterfaceBelarusian {
      biographyTitle
      worksTitle
      firstColumnTitle
      secondColumnTitle
      watchVideoTitle
      galleryTitle
    }
  }
`;

export default IndexPage;
