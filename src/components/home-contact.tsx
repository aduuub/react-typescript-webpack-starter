import * as React from 'react';

import { FormEvent, RefObject } from 'react';

interface IProps {
}

interface IState {
    sent: boolean;
}

export default class HomeContact extends React.Component<IProps, IState> {

    name: RefObject<HTMLInputElement>;
    email: RefObject<HTMLInputElement>;
    message: RefObject<HTMLTextAreaElement>;
    form: RefObject<HTMLFormElement>;
    formMessage: string;
    sending: boolean;

    constructor(props: IProps) {
        super(props);

        this.name = React.createRef();
        this.email = React.createRef();
        this.message = React.createRef();
        this.form = React.createRef();
        this.formMessage = '';
        this.sending = false;
        this.state = {
            sent: false,
        };
    }

    validateInput(input: HTMLInputElement | HTMLTextAreaElement): boolean {
        if ((input.value?.length ?? 0) < 1) {
            input.classList.add('Invalid');
            return false;
        }

        input.classList.remove('Invalid');
        return true;
    }

    value(input: HTMLInputElement | HTMLTextAreaElement): string {
        return input.value;
    }

    validate(): boolean {
        const validName = this.validateInput(this.name.current!);
        const validEmail = this.validateInput(this.email.current!);
        const validMessage = this.validateInput(this.message.current!);

        return validName && validEmail && validMessage;
    }

    handleSubmit(event: FormEvent<EventTarget>) {
        event.preventDefault();
        
        if (this.sending) {
            return;
        }

        if (!this.validate()) {
            return;
        }

        this.sending = true;
        console.log('send');

        const name = this.value(this.name.current!);
        const email = this.value(this.email.current!);
        const message = this.value(this.message.current!);

        const formData = new ContactFormData(name, email, message);
        const data = JSON.stringify(formData);
    
        fetch('http://localhost:5000/contact', {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            method: 'post',
            body: data,
        }).then((response) => {
            if (response.ok) {
                this.formMessage = 'Enquiry successfully sent';
            } else {
                this.formMessage = 'Enquiry failed to send';
            }
            this.setState({ sent: true });
            this.sending = false;
        });
    }

    resetForm() {
        this.setState({ sent: false });
        this.formMessage = '';
    }

    render() {
        return (
            <>
            <div className='HomeContact-slant'></div>
            <div className='HomeContact'>
                <div className='HomeContact-container'>
                    <div className='Grid'>
                        {/* Text */}
                        <div className='u-md-width1of2'>
                            <h1 className='HomeContact-title'>Let's talk</h1>
                            <p className='HomeContact-body'>You can get in touch with me by sending me a note or give me a call on +64 27 766 0041</p>
                        </div>
                        {/* Form */}
                        <div className='u-md-width1of2'>
                            <div className='HomeContact-form'>
                                { !this.state.sent &&
                                    <form onSubmit={this.handleSubmit.bind(this)} ref={this.form}>
                                        <input className='Input' placeholder='Your name' ref={this.name}></input>
                                        <input className='Input' placeholder='Your email' ref={this.email}></input>
                                        <textarea className='TextArea' placeholder='How can I help?' ref={this.message}></textarea>
                                        <input className='Button' type='submit' value='Submit'/>
                                    </form>
                                }
                                { this.state.sent &&
                                    <div className='HomeContact-form-response'>
                                        <h4 className='HomeContact-form-message'>{this.formMessage}</h4>
                                        <button className='Button' onClick={this.resetForm.bind(this)}>Enquire again</button>
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </>
        );
    }
}

class ContactFormData {
    name: string;
    email: string;
    message: string;

    constructor(name: string, email: string, message: string) {
        this.name = name;
        this.email = email;
        this.message = message;
    }
}   
