import * as React from 'react';
import { Link } from 'react-router-dom';


import Calendar from 'components/calendar';

export default class Landing extends React.Component {
  render() {
    return (
      <div className='u-textCenter'>
        <h2>This is the Landing page</h2>
        <Calendar />
      </div>
    );
  }
}
