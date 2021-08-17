import cartDropDownActionTypes from './cartDropDownActionTypes';

const INITIAL_STATE = {
    hidden: false
}

const cartDropDownReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case cartDropDownActionTypes.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            }
        default:
            return state;
    }
}

export default cartDropDownReducer;