import * as React from 'react';

import AboutMe from 'components/about-me';
import Header from 'components/header';
import HomeBlog from 'components/home-blog';
import Navigation from 'components/nav';

export default class AppRoute extends React.Component {

  render() {
    return (
      <div>
        <Navigation />

        <Header />
        <div className='Header-footer'></div>

        <AboutMe />
        <HomeBlog />
      </div>
    );
  }
}
