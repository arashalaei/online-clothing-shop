import React from 'react';
import {ReactComponent as ShoppingIcon} from './../../assest/shopping-bag.svg';
import {connect} from 'react-redux';
import {toggleCartHidden} from './../../redux/cart-dropdown/cartDropDown.action.js';
import {selectCartItemCount} from './../../redux/cart-dropdown/cart.selector';

const CartIcon = ({toggleCart, itemCount}) => (
    <div className = "cart-icon" onClick={toggleCart}>
        <ShoppingIcon className="cart-icon__shopping-icon"/>
        <span className="cart-icon__count">{itemCount}</span>
    </div>
)

const mapStateToProps = (state) => ({
    itemCount: selectCartItemCount(state)
});

const mapDispatchToProps = dispatch => ({
    toggleCart: () => dispatch(toggleCartHidden())
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);