import * as React from 'react';

import { IArticleTile } from 'models/article';
import person from 'assets/person.png';

interface IProps {
    article: IArticleTile;
}

export default class BlogTile extends React.Component<IProps> {

  render() {
      return (
      <div className='BlogTile'>
          <div className='BlogTile-container'>
              <div className='BlogTile-left'>
                  <img className='BlogTile-left-img' src={person} />
              </div>
              <div className='BlogTile-right'>
                  <h4 className='BlogTile-title'>Article name</h4>
                  <p className='BlogTile-body'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam imperdiet
                      ligula vitae
                      sapien pulvina. </p>
              </div>
          </div>
      </div>
      );
  }
}






