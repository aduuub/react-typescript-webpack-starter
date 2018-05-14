import * as React from 'react';

interface IProps {
    title: string;
    age: number;
}

export class Login extends React.Component<IProps> {
    render() {
        return (
            <h1>{this.props.age}</h1>
        );
    }
}
