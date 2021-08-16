import userActionTypes from './userActionTypes' ;

const INITIAL_STAT = {
    currentUser: null
}

const userReducer = (state = INITIAL_STAT, action) => {
    switch(action.type){
        case userActionTypes.SET_CURRENT_USER:
            return{
                ...state,
                currentUser: action.payload
            }
        default:
            return state;

    }
}

export default userReducer;