import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import App from 'routes/app';
import Landing from 'routes/landing';
import Login from 'routes/login';
import Unknown from 'routes/unknown';

import './styles/index.scss';

class Root extends React.Component {
  render() {
    return (
      <div className='hi'>
        <BrowserRouter>
          <Switch>
            <Route exact path='/' component={Landing} />
            <Route path='/login' component={Login} />
            {/* Web app */}
            <Route path='/home' component={App} />
            {/* Fallback */}
            <Route path='/' component={Unknown} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

ReactDOM.render(
  <Root />,
  document.getElementById('root'),
);
