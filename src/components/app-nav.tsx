import * as React from 'react';

import { Link } from 'react-router-dom';

export default class Navigation extends React.Component {
  render() {
    return (
      <div>
        <div className='Nav Nav--landing'>
          <div className='Grid'>
            <div className='u-width1of2'>
            <Link to='/'>
              <h2 className='Nav-title'>Aria</h2>
            </Link>
            </div>
            <div className='u-width1of2'>
              {/* Nav item */}
              <ul className='Nav-links'>
                <li className='Nav-links-item'>
                  <Link to='/login' className='Button'>Account</Link>
                </li>
                <li className='Nav-links-item'>
                  <Link to='/signup' className='Button'>Settings</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
