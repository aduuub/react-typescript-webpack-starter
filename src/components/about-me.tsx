import * as React from 'react';
import { Element } from 'react-scroll';

import person from 'assets/person.png';
import Constants from 'models/constants';

interface IProps {
}

export default class AboutMe extends React.Component<IProps> {

  render() {
      return (
        <Element className='AboutMe' name={Constants.aboutMeKey}>
          <div className='Grid'>
            <div className='u-md-width1of2'>
              <img src={person} />
            </div>
            <div className='u-md-width1of2'>
              <div className='AboutMe-content'>
                <h2>Gidday, i’m adam!</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam imperdiet ligula vitae sapien pulvina. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam imperdiet ligula vitae sapien pulvina. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam imperdiet ligula vitae sapien pulvina.</p>
              </div>
            </div>
          </div>
      </Element>
      );
  }
}
