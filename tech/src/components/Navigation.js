import { Link } from 'react-router-dom';
import React from 'react';
import { connect } from 'react-redux';
import { getUsers, logout } from '../actions';
import styled from 'styled-components';

const StyledNav = styled.div`{
   height: 90px;
   display: flex;
   justify-content: space-between;
   align-items: center;
   position: sticky; top: 0;
   background: white;
   box-shadow: 0px 0px 27px -7px rgba(0, 0, 0, 0.5);

   .links {
      margin-right: 2%;
      width: 400px;
      display: flex;
      justify-content: space-around;
   };

   h1 {
      font-family: 'Roboto';
      font-weight: 900;
      font-size: 24px;
      margin-left: 35%;
      width: 120px;
   };

}`;

class Navigation extends React.Component  {

   render () {
    const user = localStorage.username;
    return (
        <StyledNav>
           <Link to="/items">
              {' '}
              <h1> Tech Plum </h1>{' '}
           </Link>
           <div className='links'>
           <a href='https://blissful-goldberg-662c12.netlify.com/'>About</a>
           <Link to='/items'>Plum Market</Link>
           <Link to={{
                  pathname: `/profile/${user}`,
                  state: {
                     user: this.props.users.filter(user => {
                        if (user.username === user);
                     })
                  },
               }}
            > Profile
            </Link>
            <Link onClick={() => this.props.logout()}
               to={{
                  pathname: `/`
               }}
            > Logout
            </Link>
         </div>
        </StyledNav>
     );
    };
};

function mapStateToProps(state) {
   return {
      users: state.users,
   };
}

export default connect(
   mapStateToProps,
   { getUsers, logout }
)(Navigation);
