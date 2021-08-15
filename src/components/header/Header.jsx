import React from 'react';
import {Link} from 'react-router-dom'; 
import {ReactComponent as Logo} from './../../assest/logo.svg';
import {auth} from './../../utils/firebase';

const Header = ({currentUser}) => (
    <header className="header">
        <Link to="/" className="header__logo-box">
            <Logo className="header__logo"/>
        </Link>
        <ul>
            <li>
                <Link to="/shop">
                    Shop
                </Link>
            </li>
            <li>
                <Link to="/contact">
                    Contact
                </Link>
            </li>
            <li>
                {
                    currentUser ? 
                        <div onClick={() => auth.signOut()}> Sign out</div>
                    :
                    <Link to="/registration">
                        Sign in
                    </Link>
                }
            </li>

        </ul>
    </header>
)

export default Header