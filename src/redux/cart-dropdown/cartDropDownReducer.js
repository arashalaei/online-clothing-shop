import cartDropDownActionTypes from './cartDropDownActionTypes';
import {addItemToCart, removeItemFromCart, decreaseQuantity} from './cartDropDown.utils';

const INITIAL_STATE = {
    hidden: false, 
    cartItems: []
}

const cartDropDownReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case cartDropDownActionTypes.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            }
        case cartDropDownActionTypes.ADD_ITEM:
            return{
                ...state, 
                cartItems: addItemToCart(state.cartItems, action.payload)
            }
        case cartDropDownActionTypes.REMOVE_ITEM:
            return {
                ...state,
                cartItems: removeItemFromCart(state.cartItems, action.payload)
            }
        
        case cartDropDownActionTypes.DECREASE_QUANTITY:
            return{
                ...state, 
                cartItems: decreaseQuantity(state.cartItems, action.payload)
            }
        default:
            return state;
    }
}

export default cartDropDownReducer;