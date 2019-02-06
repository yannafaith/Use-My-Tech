import { Link } from 'react-router-dom';
import React from 'react';
import { connect } from 'react-redux';
import { getUsers } from '../actions';

const Navigation = props => {
   const user = localStorage.getItem('username');
   return (
      <div>
         <Link to="/items">
            {' '}
            <h1> Tech Vault </h1>{' '}
         </Link>
         {user && (
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
         )}
      </div>
   );
};

function mapStateToProps(state) {
   return {
      users: state.users,
   };
}

export default connect(
   mapStateToProps,
   { getUsers }
)(Navigation);
