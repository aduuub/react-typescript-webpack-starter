import * as React from 'react';

import FeatureTile from 'components/feature-tile';

import computer from 'assets/computer.png';
import house from 'assets/house.png';

interface IProps {
}

export default class Header extends React.Component<IProps> {

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
    const featureTiles = this.titleContent().map((content, index) =>
      <div className='u-sm-width1of1 u-md-width1of2' key={index}>
        <FeatureTile title={content.title} body={content.body} image={content.image} key={index} />
      </div>,
    );

    return (
        <>
          <div className='Header'>
            <div className='Header-title'>
              <h1>Who is Adam?</h1>
              <h5>An entrepreneur, software developer, and project manager in Wellington, NZ</h5>
            </div>
            <div className='Header-content'>
              <div className='Grid Header-content-items'>
                {featureTiles}
              </div>
            </div>
          </div>
          <div className='Header-footer'></div>
        </>
    );
  }
}
