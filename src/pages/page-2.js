import React from 'react';
import { graphql, Link } from 'gatsby';

import { Layout } from '../layout/Layout';
import AuthorsList from '../components/AuthorsList';

const SecondPage = ({ data }) => {
  const authors = data;

  return (
    <Layout>
      <AuthorsList authors={authors} />
    </Layout>
  );
};

export const query = graphql`
  query newAuthorQuery1 {
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
  }
`;

export default SecondPage;
