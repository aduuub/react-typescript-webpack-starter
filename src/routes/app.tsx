import * as React from 'react';

import FeatureTile from 'components/feature-tile';
import Navigation from 'components/nav';

import computer from 'assets/computer.png';
import house from 'assets/house.png';
import person from 'assets/person.png';

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

        {/* Header */}
        <div className='Header'>
          <div className='Header-title'>
            <h1>A statement about what you do</h1>
            <h5>An entrepreneur, software developer, and project manager in Wellington, NZ</h5>
          </div>
          <div className='Header-content'>
            <div className='Grid u-flex'>
              {featureTiles}
            </div>
          </div>
        </div>

        <div className='Header-footer'></div>

        {/* About me */}
        <div className='AboutMe'>
          <div className='Grid'>
            <div className='u-width1of2'>
              <img src={person} />
            </div>
            <div className='u-width1of2'>
              <div className='AboutMe-content'>
                <h2>Gidday, i’m adam!</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam imperdiet ligula vitae sapien pulvina. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam imperdiet ligula vitae sapien pulvina. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam imperdiet ligula vitae sapien pulvina.</p>
              </div>
            </div>
          </div>
        </div>

        <div className='HomeBlog'>
          <div className='HomeBlog-header'>
            <p className='HomeBlog-header-leading'>My thoughts on</p>
            <h2 className='HomeBlog-header-main'>Project management</h2>
            <p>I have a project management company that specialises in turning round renovations quickly. This is especially useful when you have tenants wanting to move in quickly, minimising rental loss, or when trading a property (buying to renovate and sell).<br /><br />Get in touch to get some assistance with your renovation. </p>
          </div>
        </div>
      </div>
    );
  }
}
