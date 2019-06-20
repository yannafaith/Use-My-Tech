import { Link } from 'react-router-dom';
import React from 'react';
import { connect } from 'react-redux';
import { getUsers, logout } from '../actions';
import { Nav } from '../css/styledcomps.js'

class Navigation extends React.Component  {

   render () {
    const user = localStorage.username;
    
    return (
      <Nav>
         <Link to="/items"><h1> Tech Plum </h1></Link>
         <div className='links'>

            <a href='https://blissful-goldberg-662c12.netlify.com/'>About</a>

            <Link to='/items'>Plum Market</Link>

            <Link 
               to={{
                  pathname: `/profile/${user}`,
                  state: {
                  user: this.props.users.filter(user => {
                     if (user.username === user) return user;
                     else return null;
                  })},
               }}
            > Profile </Link>

            <Link 
               onClick={() => this.props.logout()}
               to={{
                  pathname: `/`
               }}
            > Logout </Link>

         </div>
      </Nav>
      );
   };

};

function mapStateToProps(state) {
   return {
      users: state.users,
   };
};

export default connect(
   mapStateToProps,
   { getUsers, logout }
)(Navigation);
