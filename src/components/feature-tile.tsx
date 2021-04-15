import * as React from 'react';

import computer from 'assets/computer.png';

export default class FeatureTile extends React.Component {
  render() {
      return (
        <div className='FeatureTile'>
            <img src={computer}></img>
            <h4 className='FeatureTile-title'>Property</h4>
            <p className='FeatureTile-body'>I’ve managed several renovations with over 200% return on cost, got my hands dirty on the tools and now love to help others renovate their properties</p>
        </div>
      );
  }
}
