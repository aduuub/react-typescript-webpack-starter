import * as React from 'react';

import Navigation from 'components/app-nav';
import Calendar from 'components/calendar';

export default class AppRoute extends React.Component {
  render() {
    return (
      <div>
        <Navigation />

        <div className='u-mT-xl'>
          <Calendar />
        </div>
      </div>
    );
  }
}
