import * as React from 'react';

import FeatureTile from 'components/feature-tile';
import Navigation from 'components/nav';

export default class AppRoute extends React.Component {
  render() {
    return (
      <div>
        <Navigation />

        <div className='Header'>
          <div className='Header-title'>
            <h1>A statement about what you do</h1>
            <h4>An entrepreneur, software developer, and project manager in Wellington, NZ</h4>
          </div>
          <div className='Grid'>
            <div className='u-width1of2'>
              <FeatureTile />
            </div>
            <div className='u-width1of2'>
              <FeatureTile />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
