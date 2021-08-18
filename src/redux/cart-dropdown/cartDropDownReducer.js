import cartDropDownActionTypes from './cartDropDownActionTypes';
import {addItemToCart} from './cartDropDown.utils';

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
        default:
            return state;
    }
}

export default cartDropDownReducer;