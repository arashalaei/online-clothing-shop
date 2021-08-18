import React from 'react';

const CartItem = ({item:{imageUrl, name, price, quantity}}) => (
    <div className='cart-item'>
        <div className="cart-item__left">
            <img src={imageUrl} alt={name} className="cart-item__img"/>
        </div>
        <div className="cart-item__right">
            <span className="cart-item__name">{name}</span>
            <span className="cart-item__price">{quantity} &times; ${price}</span>
        </div>
    </div>
)

export default CartItem;