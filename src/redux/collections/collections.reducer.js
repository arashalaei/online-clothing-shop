import collectionsActionTypes from './collections.types';

const INIT_STATE = {};

const collectionsReducer = (state = INIT_STATE, action) => {
    switch(action.type){
        case collectionsActionTypes.UPDATE_COLLECTIONS:
            return {
                ...state, 
                ...action.payload
            }
        default:
            return state;
    }
}

export default collectionsReducer;