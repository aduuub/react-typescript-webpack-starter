import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import App from 'routes/app/route';

import './styles/index.scss';

class Root extends React.Component {
  render() {
    return (
      <div className='hi'>
        <BrowserRouter>
          <Switch>
            {/* Home */}
            <Route path='/' component={App} />
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
