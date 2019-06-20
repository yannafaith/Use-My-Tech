import React from 'react';
import { Form } from '../css/styledcomps.js'

const AddItemForm = (props) => {

    return (
        <Form>
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
                <input 
                    name= 'file' 
                    type='file' 
                    onChange={props.fileHandler} 
                /> 
                <button onClick={props.uploadImg}>Upload</button>
                <button type='submit'>Add Item</button>
            </form>
        </Form>
    )
};

export default AddItemForm; 