import React from 'react';
import {ReactComponent as ShoppingIcon} from './../../assest/shopping-bag.svg';
import {connect} from 'react-redux';
import {toggleCartHidden} from './../../redux/cart-dropdown/cartDropDown.action.js';

const CartIcon = ({toggleCart}) => (
    <div className = "cart-icon" onClick={toggleCart}>
        <ShoppingIcon className="cart-icon__shopping-icon"/>
        <span className="cart-icon__count">0</span>
    </div>
)

const mapDispatchToProps = dispatch => ({
    toggleCart: () => dispatch(toggleCartHidden())
})

export default connect(null, mapDispatchToProps)(CartIcon);