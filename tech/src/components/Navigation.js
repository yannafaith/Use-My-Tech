import { Link } from 'react-router-dom';
import React from 'react';
import { connect } from 'react-redux';
import { getUsers, logout } from '../actions';

class Navigation extends React.Component  {


   render () {
    const user = localStorage.username;
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
                       user: this.props.users.map(user => {
                          if (user.username === user) return user;
                       }),
                    },
                 }}
              >
                 {' '}
                 My Profile
              </Link>
  
              {/* ============= */}
              <Link onClick={() => this.props.logout()}
                 to={{
                    pathname: `/`
                 }}
              >
                 {' '}
                 <button onClick={() => localStorage.clear()}>Logout</button>
              </Link>
              </div>
           )}
        </div>
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

*/