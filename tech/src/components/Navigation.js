import { Link } from 'react-router-dom';
import React from 'react';
import { connect } from 'react-redux';
import { getUsers, logout } from '../actions';
import styled from 'styled-components';

const StyledNav = styled.div`{
   // border: solid red 2px;
   display: flex;
   width: 99%;
   justify-content: space-between;
   box-shadow: 0px 0px 27px -7px rgba(0, 0, 0, 0.5);
   position: fixed;
   z-index: 1;
   width: 100%;
   background: #ffffff;
   top: 0;
   line-height: 30px;
   font-family: 'Roboto';
   padding-left: 3%;
   .links {
      // border: solid red 2px;
      margin-right: 5%;
      align-items: center;
      width: 500px;
      display: flex;
      justify-content: space-around;
   }
   align-items: center;
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
           <Link to='/items'>Rent a Device</Link>
           <Link to='/items'>List a Device</Link>
           <Link to='/items'>Plum Market</Link>
           <Link
                 to={{
                    pathname: `/profile/${user}`,
                    state: {
                       user: this.props.users.map(user => {
                          if (user.username === user) return user;
                       }),
                    },
                 }}
              >
                 {' '}
                  Profile
            </Link>
            <Link onClick={() => this.props.logout()}
                 to={{
                    pathname: `/`
                 }}
              > Logout
                 {' '}
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

/* 
const Navigation = props => {
   const user = localStorage.getItem('username');
   return (
      <div>
         <Link to="/items">
            {' '}
            <h1> Tech Vault </h1>{' '}
         </Link>
         {user && ( <div>
            <Link
               to={{
                  pathname: `/profile/${user}`,
                  state: {
                     user: props.users.map(user => {
                        if (user.username === user) return user;
                     }),
                  },
               }}
            >
               {' '}
               My Profile
            </Link>

            <Link
               to={{
                  pathname: `/logout`
               }}
            >
               {' '}
               <button onCLick={}>Logout</button>
            </Link>
            </div>
         )}
      </div>
   );
};

           {user && ( <div className='links'>
              <Link
                 to={{
                    pathname: `/profile/${user}`,
                    state: {
                       user: this.props.users.map(user => {
                          if (user.username === user) return user;
                       }),
                    },
                 }}
              >
                 {' '}
                  Profile
              </Link>

              <Link onClick={() => this.props.logout()}
                 to={{
                    pathname: `/`
                 }}
              > Logout
                 {' '}
              </Link>
              </div>
           )}

*/