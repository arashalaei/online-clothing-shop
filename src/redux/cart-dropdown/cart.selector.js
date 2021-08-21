import {createSelector} from 'reselect';

// Input selector
const selectCart = state => state.cartDropDown;

// Output selectors
export const selectCartHidden = createSelector(
    [selectCart], 
    (cart) => cart.hidden
)

export const selectCartItems = createSelector(
    [selectCart], 
    (cart) => cart.cartItems
)

export const selectCartItemCount = createSelector(
    [selectCartItems], 
    (cartItems) => cartItems.reduce((accumalatedQuantity, cartItem) => accumalatedQuantity + cartItem.quantity, 0)
)

export const selectTotalCartPrice = createSelector(
    [selectCartItems], 
    (cartItems) => cartItems.reduce((accumalatedPrice, cartItem) =>  accumalatedPrice + (cartItem.price * cartItem.quantity), 0)
)