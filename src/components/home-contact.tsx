import * as React from 'react';

import Input from 'components/input';

interface IProps {
}

export default class HomeContact extends React.Component<IProps> {

    render() {
        return (
            <>
            <div className='HomeContact-slant'></div>
            <div className='HomeContact'>
                <div className='HomeContact-container'>
                    <div className='Grid'>
                        {/* Text */}
                        <div className='u-width1of2'>
                            <h1 className='HomeContact-title'>Let's talk</h1>
                            <p className='HomeContact-body'>You can get in touch with me by sending me a note or give me a call on +64 27 766 0041</p>
                        </div>
                        {/* Form */}
                        <div className='u-width1of2'>
                            <div className='HomeContact-form'>
                                <Input placeholder='Your name' />
                                <Input placeholder='Your email' />
                                <Input placeholder='How can I help?' multiline={true} />
                                <button className='Button' type='submit'>Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </>
        );
    }
}