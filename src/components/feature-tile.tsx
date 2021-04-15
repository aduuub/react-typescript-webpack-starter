import * as React from 'react';

interface IProps {
    title: string;
    body: string;
    image: any;
}

export default class FeatureTile extends React.Component<IProps> {

  render() {
      return (
        <div className='FeatureTile'>
          <div className='FeatureTile-container'>
            <img className='FeatureTile-image' src={this.props.image}></img>
            <div className='FeatureTile-content'>
                <h4 className='FeatureTile-title'>{this.props.title}</h4>
                <p className='FeatureTile-body'>{this.props.body}</p>
            </div>
          </div>
        </div>
      );
  }
}
