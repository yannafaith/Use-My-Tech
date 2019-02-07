import axios from 'axios';
export const GET_ITEMS_SUCCESS = 'GET_ITEMS_SUCCESS';
export const GET_ITEMS_FAILURE = 'GET_ITEMS_FAILURE';

export const POST_ITEM_SUCCESS = 'POST_ITEM_SUCCESS';
export const POST_ITEM_FAILURE = 'POST_ITEM_FAILURE';

export const PUT_ITEM_SUCCESS = 'PUT_ITEM_SUCCESS';
export const PUT_ITEM_FAILURE = 'PUT_ITEM_FAILURE';

export const DELETE_ITEM_SUCCESS = 'DELETE_ITEM_SUCCESS';
export const DELETE_ITEM_FAILURE = 'DELETE_ITEM_FAILURE';

export const GET_USERS_SUCCESS = 'GET_USERS_SUCCESS';
export const GET_USERS_FAILURE = 'GET_USERS_FAILURE';

export const POST_USER_SUCCESS = 'POST_ITEM_SUCCESS';
export const POST_USER_FAILURE = 'POST_ITEM_FAILURE';

export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';

export const REGISTER_USER_SUCCESS = 'REGISTER_USER_SUCCESS'

export const login = creds => dispatch => {
   axios
      .post('https://use-my-tech-stuff.herokuapp.com/api/auth/login', creds)
      .then(res => {
         console.log('res.data LOGIN', res.data);
         localStorage.setItem('jwt', res.data.token);
         localStorage.setItem('userId', res.data.userId)
         const token = localStorage.getItem('jwt');

         dispatch({ type: LOGIN, payload: token });
      })
      .catch();
};

export const logout = () => dispatch => {
   dispatch({ type: LOGOUT });
};

export const registerUser = user => dispatch => {
   // dispatch({type: REGISTER_USER_START})
   axios.post(`https://use-my-tech-stuff.herokuapp.com/api/auth/register`, user)
     .then(res => {
       localStorage.setItem('jwt', res.data.token)
       localStorage.setItem('userId', res.data.userId)
       localStorage.setItem('username', user.username)
       dispatch({ type: REGISTER_USER_SUCCESS })
       dispatch(getUsers())
     })
     .catch()
 }

export const getUsers = () => dispatch => {
   axios
      .get('https://use-my-tech-stuff.herokuapp.com/api/users')
      .then(res => dispatch({ type: GET_USERS_SUCCESS, payload: res.data }))
      .catch(err => dispatch({ type: GET_USERS_FAILURE, payload: err }));
};

export const getItems = () => dispatch => {
   axios
      .get('https://use-my-tech-stuff.herokuapp.com/api/items')
      .then(res => dispatch({ type: GET_ITEMS_SUCCESS, payload: res.data }))
      .catch(err => dispatch({ type: GET_ITEMS_FAILURE, payload: err }));
};

export const postItem = item => dispatch => {
   const token = localStorage.getItem("jwt");
   const options = {
     headers: {
       authorization: token
     }
   };
   axios
      .post('https://use-my-tech-stuff.herokuapp.com/api/items', { ...item }, options)
      .then(res => {
         console.log('postItem', res.data);
         dispatch({ type: POST_ITEM_SUCCESS, payload: res.data });
      })
      .catch(err => dispatch({ type: POST_ITEM_FAILURE, payload: err }));
};

export const deleteItem = (itemId) => dispatch => {
   const token = localStorage.getItem("jwt");
   const options = {
     headers: {
       authorization: token
     }
   };
   axios
       .delete(`https://use-my-tech-stuff.herokuapp.com/api/items/${itemId}`, options)
       .then(res => {
           dispatch({type: DELETE_ITEM_SUCCESS, payload: res.data});
           dispatch(getItems())
         })
       .catch(err => dispatch({type: DELETE_ITEM_FAILURE, payload: err}));
};
export const putItem = (itemId, updatedItem) => dispatch => {
   const token = localStorage.getItem("jwt");
   const options = {
     headers: {
       authorization: token
     }
   };
   axios
      .patch(`https://use-my-tech-stuff.herokuapp.com/api/items/${itemId}`, updatedItem, options)
      .then(res => {
         dispatch(getItems())
         dispatch({ type: PUT_ITEM_SUCCESS, payload: res.data })})
      .catch(err => dispatch({ type: PUT_ITEM_FAILURE, payload: err }));
};

