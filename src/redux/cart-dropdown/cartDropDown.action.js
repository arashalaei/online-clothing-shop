import cartDropDownActionTypes from './cartDropDownActionTypes';

export const toggleCartHidden = () => ({
  type: cartDropDownActionTypes.TOGGLE_CART_HIDDEN
});

export const addItem = (item) => ({
  type: cartDropDownActionTypes.ADD_ITEM, 
  payload: item
})