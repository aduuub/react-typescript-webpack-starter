import * as React from 'react';

import person from 'assets/person.png';

interface IProps {
}

export default class AboutMe extends React.Component<IProps> {

  render() {
      return (
        <div className='AboutMe'>
        <div className='Grid'>
          <div className='u-width1of2'>
            <img src={person} />
          </div>
          <div className='u-width1of2'>
            <div className='AboutMe-content'>
              <h2>Gidday, i’m adam!</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam imperdiet ligula vitae sapien pulvina. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam imperdiet ligula vitae sapien pulvina. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam imperdiet ligula vitae sapien pulvina.</p>
            </div>
          </div>
        </div>
      </div>
      );
  }
}  
