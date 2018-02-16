import React from 'react';
import {Switch, Route} from 'react-router-dom';

import MainTemplate from '../templates/MainTemplate';

import Home from './Home';

const Routes = () => (
  <Route
    path="/"
    render={() => (
      <MainTemplate>
        <Switch>
          <Route exact path={`${process.env.PUBLIC_URL}/`} component={Home} />
          <Route
            render={() => (
              <div>Nothing found!</div>
            )}
          />
        </Switch>
      </MainTemplate>
    )}
  />
);

export default Routes;
