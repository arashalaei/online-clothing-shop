import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectCartItems, selectTotalCartPrice} from './../../../redux/cart-dropdown/cart.selector';
import CheckOutItem from './../../checkout-item/CheckOutItem';

const CheckOutPage = ({cartItems, total}) => (
    <section className="checkoutpage">
        <div className="checkoutpage__header">
            <div className="checkoutpage__header-item">Product</div>
            <div className="checkoutpage__header-item">Description</div>
            <div className="checkoutpage__header-item">Quantity</div>
            <div className="checkoutpage__header-item">Price</div>
            <div className="checkoutpage__header-item">Remove</div>
        </div>
        {
            cartItems.map(cartItem => <CheckOutItem key={cartItem.id} cartItem={cartItem} />)
        }
        <span className="checkoutpage__total">Total: ${total}</span>
    </section>
)

const mapStateToProps = createStructuredSelector({
    total: selectTotalCartPrice, 
    cartItems: selectCartItems
})

export default connect(mapStateToProps)(CheckOutPage);