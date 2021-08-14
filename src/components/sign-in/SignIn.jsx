import React, {Component} from 'react';
import FormInput from './../form-input/FormInput'
import Button from './../button/Button';

class SignIn extends Component{
    constructor(){
        super();

        this.state = {
            email: '', 
            password: '' 
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
                <form action="#" className="form">
                    <FormInput type="email" label="Email" handleChange={this.handleChange}/>
                    <FormInput type="password" label="Password" handleChange={this.handleChange}/>
                    <div className="form__group form__group-submit">
                        <Button color="blue">Sign in</Button>
                        <Button color="black">Sign in with Google</Button>
                    </div>
                </form>
            </section>

        )
    }
}

export default SignIn;