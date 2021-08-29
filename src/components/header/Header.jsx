import React from 'react';
import {ReactComponent as Logo} from './../../assest/logo.svg';
import {auth} from './../../utils/firebase';
import {connect} from 'react-redux';
import CartIcon from './../cart-icon/CartIcon';
import CartDropDown from './../cart-dropdown/CartDropDown';
import {createStructuredSelector} from 'reselect';
import {selectCurrentUser} from './../../redux/user/user.selector';
import {selectCartHidden} from './../../redux/cart-dropdown/cart.selector';
import {HeaderContainer, HeaderListContainer, HeaderItemContainer, HeaderLinkContainer, HeaderDivContainer} from './header.styles';

const Header = ({currentUser, hidden}) => (
    <HeaderContainer>
        <HeaderLinkContainer to="/" className="header__logo-box">
            <Logo className="header__logo"/>
        </HeaderLinkContainer>
        <HeaderListContainer>
            <HeaderItemContainer>
                <HeaderLinkContainer to="/shop">
                    Shop
                </HeaderLinkContainer>
            </HeaderItemContainer>
            <HeaderItemContainer>
                <HeaderLinkContainer to="/contact">
                    Contact
                </HeaderLinkContainer>
            </HeaderItemContainer>
            <HeaderItemContainer>
                {
                    currentUser ? 
                        <HeaderDivContainer onClick={() => auth.signOut()}> Sign out</HeaderDivContainer>
                    :
                    <HeaderLinkContainer to="/registration">
                        Sign in
                    </HeaderLinkContainer>
                }
            </HeaderItemContainer>
            <HeaderItemContainer>
                <CartIcon />
            </HeaderItemContainer>
        </HeaderListContainer>
        {hidden? <CartDropDown /> : null}  
    </HeaderContainer>
)

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden 
})


export default connect(mapStateToProps)(Header)