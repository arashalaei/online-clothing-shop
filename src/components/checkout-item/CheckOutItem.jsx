import React from 'react';

const CheckOutItem = ({cartItem:{imageUrl, name, price, quantity}}) => (
                    <div className="checkout-item">
                        <div className="checkout-item__image">
                            <img src={imageUrl} alt={name}/>
                        </div>
                        <span className="checkout-item__description">{name}</span>
                        <span className="checkout-item__quantity">{quantity}</span>
                        <span className="checkout-item__price">${price}</span>
                        <span className="checkout-item__remove">&#10005;</span>
                    </div>
)

export default CheckOutItem;