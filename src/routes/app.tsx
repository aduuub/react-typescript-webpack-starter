import * as React from 'react';

import FeatureTile from 'components/feature-tile';
import Navigation from 'components/nav';

import computer from 'assets/computer.png';
import house from 'assets/house.png';

export default class AppRoute extends React.Component {

  titleContent() {
    return [
      {
        title: 'Property',
        body: 'I’ve managed several renovations with over 200% return on cost, got my hands dirty on the tools and now love to help others renovate their properties',
        image: house,
      },
      {
        title: 'Software Development',
        body: 'Beginning my career in front end web and native iOS development, I’ve loved sharing knowledge with my team and leading them towards ambitious goals',
        image: computer,
      },
    ];
  }

  render() {
    const featureTiles = this.titleContent().map((content) =>
      <div className='u-width1of2'>
        <FeatureTile
          title={content.title}
          body={content.body}
          image={content.image} />
      </div>,
    );

    return (
      <div>
        <Navigation />

        <div className='Header'>
          <div className='Header-title'>
            <h1>A statement about what you do</h1>
            <h4>An entrepreneur, software developer, and project manager in Wellington, NZ</h4>
          </div>
          <div className='Header-content'>
            <div className='Grid u-flex'>
              {featureTiles}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
