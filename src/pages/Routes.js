// @flow
import * as React from 'react';
import { Switch, Route } from 'react-router-dom';

import MainTemplate from '../templates/MainTemplate';

import Home from './Home';

const Routes = (): React.Node => (
  <Route
    path="/"
    render={(): React.Node => (
      <MainTemplate>
        <Switch>
          <Route exact path={`${process.env.PUBLIC_URL || ''}/`} component={Home} />
          <Route
            render={(): React.Node => (
              <div>Nothing found!</div>
            )}
          />
        </Switch>
      </MainTemplate>
    )}
  />
);

export default Routes;
