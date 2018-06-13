import * as React from 'react';
import { Link } from 'react-router-dom';

export default class Login extends React.Component {
  render() {
    return (
      <div className='Container'>
        <div className='Login'>
          <label key='username-input' className='Login-label'>Username</label>
          <input id='username-input' className='Login-input' placeholder='Username'/>
          <label key='password-input' className='Login-label'>Password</label>
          <input id='password-input' className='Login-input' placeholder='Password' type='password'/>
          <Link to='/home' className='Button'>Login in</Link>
        </div>
      </div>
    );
  }
}
