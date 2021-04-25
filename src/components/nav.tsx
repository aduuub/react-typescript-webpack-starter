import * as React from 'react';

import { Link } from 'react-scroll';

import Constants from 'models/constants';

export default class Navigation extends React.Component {
  render() {
      return (
        <div>
          <div className='Nav'>
            <div className='Grid'>
              {/* Left side */}
              <div className='u-width1of1 u-lg-width3of4'>
                <ul className='Nav-links'>
                  {/* Name */}
                  <li className='Nav-links-item'>
                    <h3 className='Nav-title'>Adam Wareing</h3>
                  </li>
                  {/* Links */}
                  <Link className='Nav-links-item Nav-links-item--tabletOnly' to={Constants.aboutMeKey} duration={500} smooth={true}>
                    <button className='Button Button--bland'>About me</button>
                  </Link>
                  <Link className='Nav-links-item Nav-links-item--tabletOnly' to={Constants.propertyKey} duration={500} smooth={true}>
                    <button className='Button Button--bland'>Property</button>
                  </Link>
                  <Link className='Nav-links-item Nav-links-item--tabletOnly' to={Constants.softwareKey} duration={500} smooth={true}>
                    <button className='Button Button--bland'>Software development</button>
                  </Link>
                </ul>
              </div>

              {/* Right side */}
              <div className='u-width0of0 u-lg-width1of4'>
                <ul className='Nav-links u-right'>
                <Link className='Nav-links-item Nav-links-item--largeOnly' to={Constants.contactKey} duration={500} smooth={true}>
                    <button className='Button'>Get in touch</button>
                  </Link>
                </ul>
              </div>
            </div>
          </div>
        </div>
    );
  }
}
