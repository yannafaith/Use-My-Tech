import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getUsers, login, registerUser } from '../actions';
import { AuthStart, AuthDone, AuthForm} from '../css/styledcomps.js'

class AuthView extends React.Component {
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
      if (this.state.username !== null) {
         localStorage.setItem('username', this.state.username);
         this.props.login(this.state);
      } else {
         alert('invalid credentials! Please try again');
      }
      this.setState({ username: '', password: ''});
   };

   submitHandlerSignUp = e => {
      e.preventDefault();
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
               <AuthDone>
                  <p>Welcome back, {localStorage.username}! Where to next?</p>
                  <div>
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
                  </div>
               </AuthDone>
            ) : (
               <AuthStart>
                  <AuthForm>
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
                        <button type="submit">Login</button>
                     </form>
                  </AuthForm>
                  <AuthForm>
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
                        <button type="submit">Signup</button>
                     </form>
                  </AuthForm>
               </AuthStart>
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
)(AuthView);
