import {GET_ITEMS_SUCCESS, GET_ITEMS_FAILURE} from '../actions';

// this controls store state

const initialState = {
    error: null,
    users: [
        {
           userId: 0,
           username: 'techguy90',   
           password: 'password' ,   
           firstName: 'Derrick',  
           lastName: 'Carr',   
           email: 'derrick@gmail.com',  
           phone: 5105552587,
           thumbnail: 'thumb_img',
        }
    ],
    items: [ 
        {
        itemId: 0,
        owner: {userId: 0, username: 'kaleb'}, // changes
        title: 'Portable Speaker',
        brand: 'Bose',
        model: '5000XL',
        description: 'blah blah blah blah',
        dailyPrice: 100,
        weeklyPrice: 450,
        label: 'Speaker',
        images: ['img1', 'img2'],
        available: true,
        renters: {userId: 2, renterFirstName: 'kaleb', rentDates: '2/5/19 - 2/10/19' } //changes
        },
        {
        itemId: 1,
        owner: {userId: 1, username: 'marcy'}, // changes
        title: 'Fog Machine',
        brand: 'PartyPack',
        model: '200 Beta',
        description: 'ha ha ha ha',
        dailyPrice: 100,
        weeklyPrice: 450,
        label: 'Effect Maker',
        images: ['img1', 'img2'],
        available: true,
        renters: {userId: 2, renterFirstName: 'marcy', rentDates: '2/5/19 - 2/10/19' } //changes
        }
    ]
};

/*

users = [
    {
       userId: 1,
       username: 'techguy90',
       firstName: 'Derrick',
       lasName: 'Carr',
       email: 'derrick@gmail.com',
       phone: '602 373 7645'
       thumbnail: '',
       location: '',
       profilePic: null
    },
];

items = [
    {
        itemId: 2,
        owner: 2,
        title: 'Portable Speaker',
        brand: 'Bose',
        model: '5000XL',
        description: 'blah blah blah blah',
        dailyPrice: 100,
        weeklyPrice: 450,
        label: 'Speaker',
        images: ['img1', 'img2']
        available: true,
        renter: 1,
    };
];

*/

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
        default: return state;
    };
};

export default reducer;