import React, { useState, useContext } from 'react';
import content from '../../storage/initState';
import { LanguageContext } from '../../layout/Layout';

import { withStyles } from '@material-ui/core/styles';
import { Grid, TextField, List, ListItem } from '@material-ui/core/';

import PoetCart from '../poetCard';

const styles = {
  container: {
    position: 'relative',
    top: '4vh',
    zIndex: 1,
  },
  form: {
    display: 'flex',
    alignItems: 'baseline',
    justifyContent: 'space-evenly',
    minWidth: '50%',
    marginTop: '3vh',
  },
  textField: {
    width: '80%',
  },
  listItem: {
    display: 'flex',
    flexDirection: 'column',
  },
  expansionPanel: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
  },
};

const AuthorsList = ({ classes, authors }) => {
  const [inputValue, setInputValue] = useState('');
  const currentLanguage = useContext(LanguageContext);
  const {
    poetsListBlock: {
      poetsListSearchLabel,
      poetCardLearnMore,
    }
  } = content[currentLanguage.code];

  const handleChange = event => {
    setInputValue(event.target.value);
  };

  const filterAuthors = (value) => {
    const queryLang =
      currentLanguage.code[0].toUpperCase() + currentLanguage.code.slice(1);
    const authorsList = authors[`allContentfulAuthor${queryLang}`].edges;

    const filteredList = authorsList.filter(author => {
      const { name, surname, city } = author.node;
      const fullName = `${name} ${surname}`.toLowerCase();
      const reverseFullName = `${surname} ${name}`.toLowerCase();
      const poetCity = city.toLowerCase();
      const eValue = value.toLowerCase();
      const regExp = new RegExp(eValue, 'g');

      return (
        regExp.test(fullName) ||
        regExp.test(reverseFullName) ||
        regExp.test(poetCity)
      );
    });

    return filteredList;
  };

  return (
    <Grid
      className={classes.container}
      container
      direction="column"
      justify="flex-start"
      alignItems="center"
    >
      <div className={`search-widget ${classes.form}`}>
        <TextField
          onChange={handleChange}
          value={inputValue}
          className={classes.textField}
          name="title"
          label={poetsListSearchLabel}
        />
      </div>

      <List>
        {filterAuthors(inputValue).map(author => {
          const {
            id,
            slug,
            name,
            surname,
            yearsOfLife,
            city,
            mainPicture,
            order,
          } = author.node;
          const poetInfo = {
            id,
            slug,
            name,
            surname,
            yearsOfLife,
            city,
            mainPicture,
            order,
          };

          return (
            <ListItem key={id} className={classes.listItem}>
              <PoetCart
                authorInfo={poetInfo}
                authorPhoto={mainPicture.file.url}
                poetCardLearnMore={poetCardLearnMore}
              />
            </ListItem>
          );
        })}
      </List>
    </Grid>
  );
};

export default withStyles(styles)(AuthorsList);
