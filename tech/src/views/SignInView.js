import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { getUsers, login, registerUser } from '../actions';

const StyledContainer = styled.div`
    {
      // border: solid slategray 1px;
      height: 300px;
      width: 50%;
      margin-left: 24%;
      display: flex;
      flex-direction: column;
      align-items: center;
      background-color: #f4f7fb;
      margin-top: 10%;
      margin-bottom: 5%;
   }
`;

const StyledForm = styled.div`
    {
      background-color: #f4f7fb;
      form {
         display: flex;
         flex-direction: column;
         // border: solid slategray 1px;
         width: 500px;
         justify-content: center;
         margin-top: 5%;
         background-color: #f4f7fb; 
         input {
            height: 20px;
           background-color: white;
         }
         button {
            width: 100px;
            height: 20px;
            align-self: center;
         }
      }
   }
`;

class SignInView extends React.Component {
   state = {
      //   newUser: {},
      validUser: null,
      username: '',
      password: '',
      newUser: {

      }
   };

   componentDidMount() {
      this.props.getUsers();
   }

   changeHandlerLogin = e => {
      this.setState({
         [e.target.name]: e.target.value,
      });
   };

   changeHandlerSignUp = e => {
      this.setState({
         newUser: {
             ...this.state.newUser, [e.target.name] : e.target.value
         }
      });
   };


   submitHandlerLogin = e => {
      e.preventDefault();
      if (this.state.username !== null && this.state.password === 'password') {
         localStorage.setItem('username', this.state.username);
         this.props.login(this.state);
      } else {
         alert('invalid credentials! Please try again');
      }
      this.setState({ username: '', password: ''});
   };

   submitHandlerSignUp = e => {
      e.preventDefault();
      // localStorage.setItem('username', this.state.username);
      this.props.registerUser(this.state.newUser);
  

      this.setState({ newUser: null});
   };


   render() {
      const loggedInUser = this.props.users.filter(
         user => user.username === localStorage.username
      );


      return (
         <div>
            {localStorage.username ? (
               <StyledContainer>
                  <p>Welcome {localStorage.username}! Where to next?</p>
                  <Link
                     to={{
                        pathname: '/items',
                        state: {
                           user: loggedInUser,
                        },
                     }}
                  >
                     <button> Plum Market </button>
                  </Link>

                  <Link
                     to={{
                        pathname: `/profile/${localStorage.username}`,
                        state: {
                           user: loggedInUser,
                        },
                     }}
                  >
                     <button> My Profile </button>
                  </Link>
               </StyledContainer>
            ) : (
               <StyledContainer>
                  <StyledForm>
                     <form onSubmit={this.submitHandlerLogin}>
                        <input
                           placeholder="username"
                           name="username"
                           onChange={this.changeHandlerLogin}
                        />
                        <input
                           placeholder="password"
                           name="password"
                           onChange={this.changeHandlerLogin}
                        />
                        <button type="submit">Sign In!</button>
                     </form>
                  </StyledForm>
                  <StyledForm>
                     <form onSubmit={this.submitHandlerSignUp}>
                        <input
                           placeholder="username"
                           name="username"
                           onChange={this.changeHandlerSignUp}
                        />
                        <input
                           placeholder="password"
                           name="password"
                           onChange={this.changeHandlerSignUp}
                        />
                        <input
                           placeholder="email"
                           name="email"
                           onChange={this.changeHandlerSignUp}
                        />
                        <input
                           placeholder="phone"
                           name="phone"
                           onChange={this.changeHandlerSignUp}
                        />
                        <input
                           placeholder="first name"
                           name="firstname"
                           onChange={this.changeHandlerSignUp}
                        />
                        <input
                           placeholder="last name"
                           name="lastname"
                           onChange={this.changeHandlerSignUp}
                        />
                        <button type="submit">Sign Up!</button>
                     </form>
                  </StyledForm>
               </StyledContainer>
            )}
         </div>
      );
   }
}

function mapStateToProps(state) {
   return {
      users: state.users,
   };
}

export default connect(
   mapStateToProps,
   { getUsers, login, registerUser }
)(SignInView);
