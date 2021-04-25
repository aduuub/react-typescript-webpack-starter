import * as React from 'react';

import { IArticleTile } from 'models/article';

import AboutMe from 'components/about-me';
import Contact from 'components/home-contact';
import Header from 'components/header';
import HomeBlog from 'components/home-blog';
import Navigation from 'components/nav';
import Constants from 'models/constants';

import person from 'assets/person.png';


export default class AppRoute extends React.Component {

  render() {
    const articles: IArticleTile[] = [
      {image: person, title: 'Article name', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam imperdiet ligula vitae sapien pulvina. '},
      {image: person, title: 'Article name', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam imperdiet ligula vitae sapien pulvina. '},
      {image: person, title: 'Article name', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam imperdiet ligula vitae sapien pulvina. '},
      {image: person, title: 'Article name', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam imperdiet ligula vitae sapien pulvina. '},
    ];

    return (
      <div>
        <Navigation />
        <Header />
        <AboutMe />
        <HomeBlog articles={articles} name={Constants.propertyKey} />
        <HomeBlog articles={articles} name={Constants.softwareKey} flipped={true} blue={true} />
        <Contact />
      </div>
    );
  }
}
