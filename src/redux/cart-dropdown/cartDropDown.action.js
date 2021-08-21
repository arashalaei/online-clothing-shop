import cartDropDownActionTypes from './cartDropDownActionTypes';

export const toggleCartHidden = () => ({
  type: cartDropDownActionTypes.TOGGLE_CART_HIDDEN
});

export const addItem = (item) => ({
  type: cartDropDownActionTypes.ADD_ITEM, 
  payload: item
})

export const removeItem = (item) => ({
  type: cartDropDownActionTypes.REMOVE_ITEM, 
  payload: item
})

export const decreaseQuantity = (item) => ({
  type: cartDropDownActionTypes.DECREASE_QUANTITY, 
  payload: item
})