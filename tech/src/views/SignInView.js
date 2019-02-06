import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import { getUsers } from '../actions';

const StyledContainer = styled.div`{
    //border: solid slategray 1px;
    height: 325px;
    width: 90%;
    margin-left: 5%;
    display: flex;
    flex-direction: column;
    align-items: center
}`;

const StyledForm = styled.div`{
    form {
        display: flex;
        flex-direction: column;
        border: solid slategray 1px;
        width: 500px;
        justify-content: center;
        margin-top: 5%;
            input {
                height: 20px;
            };
            button {
                width: 100px;
                height: 20px;
                align-self: center
            };
    };
}`;


class SignInView extends React.Component {
    state = {
        newUser: {},
        validUser: false,
        username: '',
        password: '',
    };

    componentDidMount() {
        this.props.getUsers()
    };

    changeHandler = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    submitHandler = e => {
        !(this.state.username === '' || this.state.password === '') ?
        this.setState({validUser: true}) : alert('must enter username and password');
        e.preventDefault();
        sessionStorage.setItem('username', this.state.username);
        console.log(sessionStorage)
    };

    render() {

       const loggedInUser =  this.props.users.filter(user =>(user.username === this.state.username));

        return (
            <div>

                {

                    this.state.validUser === true ? 
                    <StyledContainer>
                        <p>Welcome {this.state.username}! Where to next?</p>
                        <Link to={{
                            pathname: '/items', 
                            state: {
                                user: loggedInUser
                            } 
                        }}>
                            <button> Go to Vault </button>
                        </Link> 

                        <Link to={{ 
                            pathname: `/profile/${this.state.username}`,
                            state: {
                                user: loggedInUser
                            }
                        }}>
                            <button> Go to Profile </button>
                        </Link> 
                    </StyledContainer>            

                    : 
                    <StyledContainer>
                        <StyledForm>
                            <form onSubmit={this.submitHandler} >
                                <input 
                                    placeholder = 'username' 
                                    name = 'username' 
                                    onChange = {this.changeHandler} />
                                <input 
                                    placeholder = 'password' 
                                    name = 'password' 
                                    onChange = {this.changeHandler} />
                                <button type='submit'>Sign In!</button>
                            </form>
                        </StyledForm>
                        <StyledForm>
                            <form onSubmit={this.submitHandler} >
                                <input 
                                    placeholder = 'username'
                                    name = 'username'
                                    onChange = {this.changeHandler} />
                                <input 
                                    placeholder = 'password'
                                    name = 'password'
                                    onChange = {this.changeHandler} />
                                <input 
                                    placeholder = 'email'
                                    name = 'email'
                                    onChange = {this.changeHandler} />
                                <input 
                                    placeholder = 'phone'
                                    name = 'phone'
                                    onChange = {this.changeHandler} />
                                <input 
                                    placeholder = 'first name'
                                    name = 'firstName'
                                    onChange = {this.changeHandler} />
                                <input 
                                    placeholder = 'last name'
                                    name = 'lastName'
                                    onChange = {this.changeHandler} />
                                <button type='submit'>Sign Up!</button>
                            </form>
                        </StyledForm>
                    </StyledContainer>
                }
            </div>
        );
    };
};

function mapStateToProps(state){
    return {
      users: state.users
    };
  };
  
export default connect(mapStateToProps, {getUsers})(SignInView);