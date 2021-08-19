import React from 'react';
import Button from './../button/Button';
import CartItem from './../cart-item/CartItem';
import {connect} from 'react-redux';
import {selectCartItems} from './../../redux/cart-dropdown/cart.selector';

const CartDropDown = ({cartItems}) => (
    <div className="cart-dropdowon">
        <div className="cart-dropdowon__content">
            {
                cartItems.map(cartItem => (<CartItem key={cartItem.id} item={cartItem}/>))
            }
        </div>
        <Button color="black">Check out</Button>
    </div>
)

const mapStateToProps = (state) => ({
    cartItems: selectCartItems(state)
})

export default connect(mapStateToProps)(CartDropDown);