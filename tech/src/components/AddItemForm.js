import React from 'react';
import styled from 'styled-components';

const FormDiv = styled.form`{
    display: flex;
    flex-direction: column;
    // border: solid red 2px;
    width: 100%;
    margin-top: 2%;
    // justify-content: space-between;
    justify-content: center;
        input {
            // border: solid green 2px;
            width: 400px;
            padding-right: 4%;
            margin-left: 4%;

        }
    button {
        // border: solid red 2px;
        margin-left: 5%;
        margin-top: 1%;
    }

}`;

const AddItemForm = (props) => {

    return (
        <FormDiv>
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
        </FormDiv>
    )
};

export default AddItemForm; 