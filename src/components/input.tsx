import * as React from 'react';

interface IProps {
  placeholder: string;
  multiline?: boolean;
}

export default class AboutMe extends React.Component<IProps> {

  render() {
    if (this.props.multiline) {
      return (
        <textarea className='TextArea' placeholder={this.props.placeholder}></textarea>
    );
    }
      return (
          <input className='Input' placeholder={this.props.placeholder}></input>
      );
  }
}