import axios from 'axios';
export const GET_ITEMS_SUCCESS = 'GET_ITEMS_SUCCESS';
export const GET_ITEMS_FAILURE = 'GET_ITEMS_FAILURE';
export const GET_USERS_SUCCESS = 'GET_USERS_SUCCESS';
export const GET_USERS_FAILURE = 'GET_USERS_FAILURE';



export const getUsers = () => dispatch => {
    axios
        .get('https://use-my-tech-stuff.herokuapp.com/api/users')
        .then(res => dispatch({type: GET_USERS_SUCCESS, payload: res.data}))
        .catch(err => dispatch({type: GET_USERS_FAILURE, payload: err}));
};

export const getItems = () => dispatch => {
    axios
        .get('https://use-my-tech-stuff.herokuapp.com/api/items')
        .then(res => dispatch({type: GET_ITEMS_SUCCESS, payload: res.data}))
        .catch(err => dispatch({type: GET_ITEMS_FAILURE, payload: err}));
};



