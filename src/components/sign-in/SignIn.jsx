import React, {Component} from 'react';
import FormInput from './../form-input/FormInput'
import Button from './../button/Button';
import {auth ,signInWithGoogle} from './../../utils/firebase';

class SignIn extends Component{
    constructor(){
        super();

        this.state = {
            email: '', 
            password: '' 
        }
    }

    handleSubmit = async event => {
        event.preventDefault();

        const {email, password} = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({
                email: '', 
                password: '' 
            })
        } catch (error) {
            console.log(error);
        }

    }
    handleChange = (event) => {
        const {value, name} = event.target;
        this.setState({
            [name]: value
        },() => {
            console.log(this.state);
        });
    }

    render(){
        return(
            <section className="signin">
                <div className="signin__heading">
                    <h2 className="heading-secondary">I Already Have an Account</h2>
                    <span className="signin__heading-span">Sign in with your email and password</span>
                </div>
                <form action="#" className="form" onSubmit={this.handleSubmit}>
                    <FormInput type="email" label="Email" handleChange={this.handleChange} value={this.state.email}/>
                    <FormInput type="password" label="Password" handleChange={this.handleChange} value={this.state.password}/>
                    <div className="form__group form__group-submit">
                        <Button color="blue">Sign in</Button>
                        <Button color="black" onClick={signInWithGoogle}>Sign in with Google</Button>
                    </div>
                </form>
            </section>

        )
    }
}

export default SignIn;