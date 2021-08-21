import React from 'react';
import {connect} from 'react-redux';
import {removeItem, addItem, decreaseQuantity} from './../../redux/cart-dropdown/cartDropDown.action'

const CheckOutItem = ({cartItem:{id ,imageUrl, name, price, quantity}, removeItem, addItem, decreaseQuantity}) => (
                    <div className="checkout-item">
                        <div className="checkout-item__image">
                            <img src={imageUrl} alt={name}/>
                        </div>
                        <span className="checkout-item__description">{name}</span>
                        <div className="checkout-item__quantity">
                            <div className="checkout-item__arrow" onClick={() => decreaseQuantity({id, quantity})}>&#10094;</div>
                            <span className="checkout-item__quantity-value">{quantity}</span> 
                            <div className="checkout-item__arrow" onClick={() =>{addItem({id})}}>&#10095;</div>
                        </div>
                        <span className="checkout-item__price">${price}</span>
                        <span className="checkout-item__remove" onClick={() => removeItem({id})}>&#10005;</span>
                    </div>
)

const mapDispatchToPops = dispatch => ({
    removeItem: (item) => dispatch(removeItem(item)), 
    addItem: (item) => dispatch(addItem(item)), 
    decreaseQuantity: (item) => dispatch(decreaseQuantity(item)) 

})

export default connect(null, mapDispatchToPops)(CheckOutItem);