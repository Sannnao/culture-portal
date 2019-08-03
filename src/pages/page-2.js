import React from 'react';
import { graphql } from 'gatsby';
import { Link } from 'gatsby';

import Layout from '../layout/';
import AuthorsList from '../components/AuthorsList';
import Layout from '../components/layout';
import SEO from '../components/seo';

const SecondPage = ({ data }) => {
  const authors = data;

  return (
    <Layout>
      <SEO title="Page two" />
      <Link to="/">Go back to the homepage</Link>
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
