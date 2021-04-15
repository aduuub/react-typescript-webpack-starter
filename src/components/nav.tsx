import * as React from 'react';

export default class Navigation extends React.Component {
  render() {
      return (
        <div>
          <div className='Nav'>
            <div className='Grid'>
              {/* Left side */}
              <div className='u-width3of4'>
                <ul className='Nav-links'>
                  {/* Name */}
                  <li className='Nav-links-item'>
                    <h3 className='Nav-title'>Adam Wareing</h3>
                  </li>
                  {/* Links */}
                  <li className='Nav-links-item'>
                    <button className='Button Button--bland'>About me</button>
                  </li>
                  <li className='Nav-links-item'>
                    <button className='Button Button--bland'>Property</button>
                  </li>
                  <li className='Nav-links-item'>
                    <button className='Button Button--bland'>Software development</button>
                  </li>
                </ul>
              </div>

              {/* Right side */}
              <div className='u-width1of4'>

                <ul className='Nav-links u-right'>
                  <li className='Nav-links-item'>
                    <button className='Button'>Get in touch</button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
    );
  }
}
