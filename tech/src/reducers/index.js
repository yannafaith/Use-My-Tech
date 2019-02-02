import {GET_SUCCESS, GET_FAILURE} from '../actions';

const initialState = {
    error: null,
    appData: [/* itemsData = [], usersData = [] */]
};

/*  Data Template: The axios requests returns an array that houses two arrays of objects. i.e.
appData = [itemsData = [], usersData = []]. Within the inner arrays are objects for each individual user and item, like shown below. 

appData = [
    itemsData = [
        item1 : {
            name: name of item
            userOwner : the user who posted the item
            description : the description displayed on the item page
            rentRate : {daily: daily price, hourly: hourly price}
            id : unique item identifier 
            pics : {pic1: url, pic2: url} display pics 
            rentRequests : shows when an item is booked and who booked it
        }
    ]
    usersData = [
        user1 : {
            name: username
            id: unique user identifier 
            pic: user profile pic
            rentRequests: shows outbound and inbound rent requests
            items: the item ids of the items that the user has posted
            email: contact email
            number: contact number
            location: user location
            password: user password
            reviews: shows all reviews left for items that user owns. Needs reviewer, itemId, and review.
        }
    ]
]

*/

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_SUCCESS:
            return {
                ...state, error: '', appData: action.payload
            };
        case GET_FAILURE: 
            return {
                ...state, error: action.payload
            };
        default: return state;
    };
};

export default reducer;