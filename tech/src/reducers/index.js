import {GET_ITEMS_SUCCESS, GET_ITEMS_FAILURE, GET_USERS_SUCCESS, GET_USERS_FAILURE} from '../actions';

// this controls store state
// need to add location to users

const initialState = {
    error: null,
    users: [],
    items: []
};


const reducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_ITEMS_SUCCESS:
            return {
                ...state, error: '', items: action.payload
            };
        case GET_ITEMS_FAILURE: 
            return {
                ...state, error: action.payload
            };
        case GET_USERS_SUCCESS: 
            return {
                ...state, users: action.payload
            };
        case GET_USERS_FAILURE: 
            return {
                ...state, error: action.payload
            };
        default: return state;
    };
};

export default reducer;