import React from 'react';
import { TextField, InputAdornment } from '@material-ui/core';
import { Search } from '@material-ui/icons';
import useStyles from './../styles/';
import { useQueryParam, StringParam } from 'use-query-params';

export default function FilesSearch({ getVideoList }) {

  const classes = useStyles();

  const [searchQuery, setQuery] = useQueryParam('search', StringParam);

  function changeQuery(query) {
    if (query.length > 4) {
      setQuery(query)
      getVideoList(query);
    } else {
      setQuery(undefined)
    }
  }

  return (
    <TextField
      value={searchQuery}
      onChange={({ target: { value } }) => changeQuery(value)}
      className={classes.textField}
      fullWidth
      variant="standard"
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <Search />
          </InputAdornment>
        ),
      }}
    />
  );
}
