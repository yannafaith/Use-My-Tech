import {GET_ITEMS_SUCCESS, GET_ITEMS_FAILURE, GET_USERS_SUCCESS, GET_USERS_FAILURE, POST_ITEM_SUCCESS, POST_ITEM_FAILURE, POST_USER_SUCCESS, POST_USER_FAILURE, PUT_ITEM_FAILURE, PUT_ITEM_SUCCESS, DELETE_ITEM_FAILURE, DELETE_ITEM_SUCCESS} from '../actions';

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
        //  ===================================
        case POST_ITEM_SUCCESS:
            return {
                ...state, error: ''
            };
        case POST_ITEM_FAILURE: 
            return {
                ...state, error: action.payload
            };
        case POST_USER_SUCCESS: 
            return {
                ...state, users: action.payload
            };
        case POST_USER_FAILURE: 
            return {
                ...state, error: action.payload
            };
        //  ===================================
        case DELETE_ITEM_SUCCESS:
            return {
                ...state, error: '', items: action.payload
            };
        case DELETE_ITEM_FAILURE: 
            return {
                ...state, error: action.payload
            };
        case PUT_ITEM_SUCCESS:
            return {
                ...state, error: '', items: action.payload
            };
        case PUT_ITEM_FAILURE: 
            return {
                ...state, error: action.payload
            };
        default: return state;
    };
};

export default reducer;