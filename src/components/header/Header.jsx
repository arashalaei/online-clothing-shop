import React from 'react';
import {Link} from 'react-router-dom'; 
import {ReactComponent as Logo} from './../../assest/logo.svg';
import {auth} from './../../utils/firebase';
import {connect} from 'react-redux';
import CartIcon from './../cart-icon/CartIcon';
import CartDropDown from './../cart-dropdown/CartDropDown';

const Header = ({currentUser, hidden}) => (
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
            <li>
                <CartIcon />
            </li>
        </ul>
        {hidden? <CartDropDown /> : null}  
    </header>
)

const mapStateToProps = ({user:{currentUser}, cartDropDown:{hidden}}) => ({
    currentUser,
    hidden 
})


export default connect(mapStateToProps)(Header)