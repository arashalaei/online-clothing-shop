export const addItemToCart = (cartItems, catrtItemToAdd) =>{
    const existingItem = cartItems.find(item => item.id === catrtItemToAdd.id);
    if(existingItem){
        return cartItems.map(item => 
            item.id === catrtItemToAdd.id ? {...item, quantity: item.quantity + 1} : item
        )
    }

    return [...cartItems, {...catrtItemToAdd, quantity: 1}]
}

export const removeItemFromCart = (cartItems, cartToRemove) => {
    return cartItems.filter(cartItem => cartItem.id !== cartToRemove.id)
}

export const decreaseQuantity = (cartItems, cartToDecrease) => {
    if(+cartToDecrease.quantity === 1){
        return removeItemFromCart(cartItems, cartToDecrease)
    }
        return cartItems.map(cartItem => 
            cartItem.id === cartToDecrease.id?
                {...cartItem, quantity: cartItem.quantity - 1}
            : cartItem
            )
    
}