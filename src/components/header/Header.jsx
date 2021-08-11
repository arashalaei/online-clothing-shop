import React from 'react';
import {Link} from 'react-router-dom'; 
import {ReactComponent as Logo} from './../../assest/logo.svg';

const Header = (props) => (
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
        </ul>
    </header>
)

export default Header