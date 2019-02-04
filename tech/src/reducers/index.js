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
        },
        {
            userId: 1,
            username: 'marcy',   
            password: 'password' ,   
            firstName: 'Marcine',  
            lastName: 'Lowther',   
            email: 'marcy@gmail.com',  
            phone: 5105552587,
         },
         {
            userId: 2,
            username: 'lolly',   
            password: 'password' ,   
            firstName: 'loline',  
            lastName: 'sage',   
            email: 'lolly@gmail.com',  
            phone: 5105552587,
         },
         {
            userId: 3,
            username: 'dave',   
            password: 'password' ,   
            firstName: 'david',  
            lastName: 'brown',   
            email: 'dave@gmail.com',  
            phone: 5105552587,
         },
         {
            userId: 4,
            username: 'rex',   
            password: 'password' ,   
            firstName: 'ronaldo',  
            lastName: 'hue',   
            email: 'rex@gmail.com',  
            phone: 5105552587,
         },
         {
            userId: 5,
            username: 'sam',   
            password: 'password' ,   
            firstName: 'samantha',  
            lastName: 'jones',   
            email: 'sammy@gmail.com',  
            phone: 5105552587,
         },
    ],
    items: [ 
        {
        itemId: 0,
        owner: 5,
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
        owner: 4,
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
        },
        {
        itemId: 2,
        owner: 3,
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
        },
        {
        itemId: 3,
        owner: 2,
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
        },
        {
        itemId: 4,
        owner: 1,
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
       },
       {
        itemId: 5,
        owner: 0,
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