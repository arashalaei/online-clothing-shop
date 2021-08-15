import React from 'react';
import SignIn from './../../sign-in/SignIn';
import SignUp from './../../sign-up/SignUp';

const RegistrationAndAuthenticationPage = (props) => (
    <section className="registrationandAuthenticationpage">
        <SignIn />
        <SignUp />
    </section>
);

export default RegistrationAndAuthenticationPage;