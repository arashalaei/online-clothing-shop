import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import userReducer from './user/userReducer';
import cartDropDownReducer from './cart-dropdown/cartDropDownReducer';
import menuReducer from './menu/menu.reducer';
import collectionsReducer from './collections/collections.reducer';

const persistConfig = {
    key: 'root', 
    storage, 
    whitelist: ['cartDropDown']
} 

const rootReducer =  combineReducers({
    user: userReducer,
    cartDropDown: cartDropDownReducer, 
    menu: menuReducer, 
    collections: collectionsReducer
})

export default persistReducer(persistConfig, rootReducer)