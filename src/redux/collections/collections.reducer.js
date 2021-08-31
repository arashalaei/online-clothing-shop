import collectionsActionTypes from './collections.types';

const INIT_STATE = {
    isFetching: false, 
    errorMessage: undefined, 
    collections: null
};

const collectionsReducer = (state = INIT_STATE, action) => {
    switch(action.type){
        case collectionsActionTypes.FETCH_COLLECTIONS_START:
            return{
                ...state, 
                isFetching: true
            }
        case collectionsActionTypes.FETCH_COLLECTIONS_SUCCESS:
            return {
                ...state,
                isFetching: false,  
                collections: action.payload
            }
            case collectionsActionTypes.FETCH_COLLECTIONS_FAILURE:
                return {
                    ...state,
                    isFetching: false, 
                    errorMessage: action.payload
                }
        default:
            return state;
    }
}

export default collectionsReducer;