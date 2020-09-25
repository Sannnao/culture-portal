import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Select, MenuItem } from '@material-ui/core';

import { supportedLanguages } from './constants';

const styles = {
  languagePicker: {
    position: 'absolute',
    left: '2vw',

    color: '#ffffff',
    fontFamily: `'PT Sans', sans-serif`,
  },
};

const LanguagePicker = ({ classes, handleChange, currentLanguage }) => {
    return (
      <Select
        className={`${classes.languagePicker} nav-bar__language-picker`}
        value={currentLanguage}
        onChange={handleChange}
      >
        {supportedLanguages.map(supportedLanguage => (
          <MenuItem key={supportedLanguage.code} value={supportedLanguage}>
            {supportedLanguage.value}
          </MenuItem>
        ))}
      </Select>
    );

}

export default withStyles(styles)(LanguagePicker);
