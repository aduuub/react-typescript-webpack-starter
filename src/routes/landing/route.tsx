import * as React from 'react';
import { Route, Switch } from 'react-router-dom';

import Navigation from 'components/navigation';

import Login from 'components/login';

import LandingHome from './landing';
import Unknown from './unknown';

export default class LandingRoute extends React.Component {
  render() {
    return (
      <div>
        <Navigation />
        <Switch>
          <Route exact path='/' component={LandingHome} />
          <Route path='/login' component={Login} />
          <Route path='/signup' component={Login} />

          {/* 404 fallback */}
          <Route component={Unknown} />
        </Switch>
      </div>
    );
  }
}
