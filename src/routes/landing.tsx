
import * as React from 'react';
import { Link } from 'react-router-dom';

export default class Landing extends React.Component {
  render() {
    return (
      <div>
        <div className='Nav Nav--landing'>
          <div className='Grid'>
            <div className='u-width2of3'>
              <h2 className='Nav-title'>Aria</h2>
            </div>
            <div className='u-width1of3'>
              {/* Nav item */}
              <ul className='Nav-links'>
                <li className='Nav-links-item'>
                  <Link to='/login' className='Button'>Sign in</Link>
                </li>
                <li className='Nav-links-item'>
                  <Link to='/signup' className='Button'>Sign up</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* Content */}
        <div className='u-textCenter'>
          <h2>Landing page...</h2>
        </div>
      </div>
    );
  }
}
