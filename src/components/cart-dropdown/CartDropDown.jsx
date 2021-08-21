import React from 'react';
import Button from './../button/Button';
import CartItem from './../cart-item/CartItem';
import {connect} from 'react-redux';
import {selectCartItems} from './../../redux/cart-dropdown/cart.selector';
import {createStructuredSelector} from 'reselect';
import {withRouter} from 'react-router-dom';
import {toggleCartHidden} from './../../redux/cart-dropdown/cartDropDown.action';

const CartDropDown = ({cartItems, history, dispatch}) => (
    <div className="cart-dropdowon">
        <div className="cart-dropdowon__content">
            {
                cartItems.length ? 
                    cartItems.map(cartItem => (<CartItem key={cartItem.id} item={cartItem}/>))
                : <span className="cart-dropdowon__empty" >Your cart is empty.</span>
                
            }
        </div>
        <Button color="black" onClick ={() => {
            history.push('/checkout')
            dispatch(toggleCartHidden())
            }}>Check out</Button>
    </div>
)

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
})

export default connect(mapStateToProps)(withRouter(CartDropDown));