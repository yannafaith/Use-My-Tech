import React from 'react';

const AddItemForm = (props) => {

    // need to automatically add renter: null, owner: userId
    return (
        <div>
            <form onSubmit={props.submitHandler} >
                <input 
                    placeholder = 'brand'
                    name = 'brand'
                    onChange = {props.changeHandler} />
                <input 
                    placeholder = 'daily price'
                    name = 'dailyPrice'
                    onChange = {props.changeHandler} />
                <input 
                    placeholder = 'weekly price'
                    name = 'weeklyPrice'
                    onChange = {props.changeHandler} />
                <input 
                    placeholder = 'description'
                    name = 'description'
                    onChange = {props.changeHandler} />
                <input 
                    placeholder = 'label'
                    name = 'label'
                    onChange = {props.changeHandler} />
                <input 
                    placeholder = 'model'
                    name = 'model'
                    onChange = {props.changeHandler} />
                <input 
                    placeholder = 'title'
                    name = 'title'
                    onChange = {props.changeHandler} />
                <input type='file' /> 
                <button type='submit'>Add Item</button>
            </form>
        </div>
    )
};

export default AddItemForm; 