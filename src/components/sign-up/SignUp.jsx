import React, {Component} from 'react';
import FormInput from './../form-input/FormInput'
import Button from './../button/Button';
import {auth, createUserProfileDocument} from './../../utils/firebase';

class SignIn extends Component{
    constructor(){
        super();

        this.state = {
            displayName:'', 
            email: '', 
            password: '' ,
            confirmPassword: '' 
        }
    }

    handleSubmit = async event => {
        event.preventDefault();
        const {displayName, email, password, confirmPassword} = this.state

        if(password !== confirmPassword){
            alert('Passwords dont match');
            return;
        }

        try {
            const {user} = await auth.createUserWithEmailAndPassword(email, password)
            
            await createUserProfileDocument(user, {displayName})

            this.setState({
                displayName:'', 
                email: '', 
                password: '' ,
                confirmPassword: '' 
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
        const {displayName, email, password, confirmPassword} = this.state
        return(
            <section className="signup">
                <div className="signup__heading">
                    <h2 className="heading-secondary">I do not Have an Account</h2>
                    <span className="signup__heading-span">Sign up with your email and password</span>
                </div>
                <form action="#" className="form" onSubmit={this.handleSubmit}>
                    <FormInput type="text" label="Display name" name="displayName" handleChange={this.handleChange} value={displayName}/>
                    <FormInput type="email" label="Email" name="email" handleChange={this.handleChange} value={email}/>
                    <FormInput type="password" label="Password" name="password" handleChange={this.handleChange} value={password}/>
                    <FormInput type="password" label="Confirm password" name="confirmPassword" handleChange={this.handleChange} value={confirmPassword}/>
                    <div className="form__group form__group-submit">
                        <Button color="black">Sign up</Button>
                    </div>
                </form>
            </section>

        )
    }
}

export default SignIn;