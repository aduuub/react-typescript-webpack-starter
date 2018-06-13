import * as React from 'react';

interface IProps {
    title: string;
    age: number;
}

export class Login extends React.Component<IProps> {
    render() {
        return (
            <div className='Container'>
                <div className='Grid'>
                    <div className='u-width1of4'>
                        <h1>{this.props.title}</h1>
                    </div>
                    <div className='u-width1of4'>
                        <h1>{this.props.title}</h1>
                    </div>
                    <div className='u-width1of4'>
                        <h1>{this.props.title}</h1>
                    </div>
                    <div className='u-width1of2'>
                        <h1>{this.props.title}</h1>
                    </div>
                </div>
            </div>
        );
    }
}
