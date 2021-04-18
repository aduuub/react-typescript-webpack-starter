import * as React from 'react';

import person from 'assets/person.png';
import BlogTile from './blog-tile';

interface IProps {
}

export default class HomeBlog extends React.Component<IProps> {

  render() {
      return (
      <div className='HomeBlog'>
          <Header />
          <div className='HomeBlog-tiles'>
              <div className='Grid u-flex'>
                  <div className='u-width1of2'>
                  <FeatureBlog />
                  </div>
                  <div className='u-width1of2'>
                      <div className='Homeblog-tiles-list'>
                        <BlogTile />
                        <BlogTile />
                        <BlogTile />
                      </div>
                  </div>
              </div>
          </div>
        </div>
    );
  }
}

function Header() {
    return (
        <div className='HomeBlog-header'>
            <p className='HomeBlog-header-leading'>My thoughts on</p>
            <h2 className='HomeBlog-header-main'>Project management</h2>
            <p>I have a project management company that specialises in turning round renovations quickly. This is
                especially useful when you have tenants wanting to move in quickly, minimising rental loss, or when
                trading a property (buying to renovate and sell).<br /><br />Get in touch to get some assistance with
                your renovation. </p>
        </div>
);
}

function FeatureBlog() {
    return (
        <div className='FeatureBlog'>
        <img src={person} />
        <h4>Article name</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam imperdiet ligula vitae sapien
            pulvina. </p>
    </div>
    );
}