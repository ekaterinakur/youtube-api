import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { QueryParamProvider } from 'use-query-params';
import { Container } from '@material-ui/core';
import useStyles from './styles';

import SearchPageHandler from './components/SearchPageHandler';
import VideoPageHandler from './components/VideoPageHandler';

 const App = () => {

  const classes = useStyles();

  return (
  <Container maxWidth='md' className={classes.container}>
    <Router>
      <Switch>
        <Redirect exact from='/' to="/videos" />
        <Route path='/videos' >
          <QueryParamProvider >
            <SearchPageHandler />
          </QueryParamProvider>
        </Route>
        <Route path='/videos/:videoId' >
          <VideoPageHandler />
        </Route>
      </Switch>
    </Router>
  </Container>
)}
;

export default App;
