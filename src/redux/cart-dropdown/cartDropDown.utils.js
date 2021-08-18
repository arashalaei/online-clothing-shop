export const addItemToCart = (cartItems, catrtItemToAdd) =>{
    const existingItem = cartItems.find(item => item.id === catrtItemToAdd.id);
    if(existingItem){
        return cartItems.map(item => 
            item.id === catrtItemToAdd.id ? {...item, quantity: item.quantity + 1} : item
        )
    }

    return [...cartItems, {...catrtItemToAdd, quantity: 1}]
}