import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import App from 'routes/app/route';
import LandingRoute from 'routes/landing/route';

// Styles
// import 'react-calendar-timeline/lib/Timeline.css';

import './styles/index.scss';

class Root extends React.Component {
  render() {
    return (
      <div className='hi'>
        <BrowserRouter>
          <Switch>
            {/* App */}
            <Route path='/app' component={App} />

            {/* Unknown -> Divert to landing */}
            <Route component={LandingRoute} />
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
