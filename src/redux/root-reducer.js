import {combineReducers} from 'redux';
import userReducer from './user/userReducer';
import cartDropDownReducer from './cart-dropdown/cartDropDownReducer';

export default combineReducers({
    user: userReducer,
    cartDropDown: cartDropDownReducer
})